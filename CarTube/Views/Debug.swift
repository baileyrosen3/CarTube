//
//  Debug.swift
//  CarTube
//
//  Created by Rory Madden on 6/1/2023.
//

import SwiftUI

struct Debug: View {
    var body: some View {
        Form {
            List {
                Section {
                    Button("Go Back in Browser") {
                        CarPlaySingleton.shared.goBack()
                    }
                    Button("Go Home: Browse") {
                        CarPlaySingleton.shared.goHome()
                    }
                    Button("Go Home: YouTube Music") {
                        CarPlaySingleton.shared.goMusic()
                    }
                    Button("Toggle CarPlay Keyboard") {
                        CarPlaySingleton.shared.toggleKeyboard()
                    }
                }
                Section(header: Text("Car screen")) {
                    ForEach(Array(UIScreen.screens.enumerated()), id: \.offset) { _, screen in
                        Text(carScreenLabel(screen))
                    }
                }
            }
        }.navigationBarTitle("Debug", displayMode: .inline)
    }

    /// The car display shows up as a UIScreen; its bounds are what CarTube
    /// actually renders into. Useful for tuning quality and zoom per car.
    private func carScreenLabel(_ screen: UIScreen) -> String {
        var isCar = false
        if screen.responds(to: NSSelectorFromString("_isCarScreen")) {
            isCar = screen._isCarScreen()
        }
        let suffix = isCar ? " — car screen" : ""
        return "\(Int(screen.bounds.width)) × \(Int(screen.bounds.height)) pts @\(Int(screen.scale))x\(suffix)"
    }
}

struct Debug_Previews: PreviewProvider {
    static var previews: some View {
        Debug()
    }
}
