import "package:flutter/material.dart" hide FilledButton;
import "package:font_awesome_flutter/font_awesome_flutter.dart";
import "package:hooks_riverpod/hooks_riverpod.dart";
import "package:rive/rive.dart";
import "package:typewriter/widgets/filled_button.dart";

class EmptyScreen extends HookConsumerWidget {
  const EmptyScreen({
    required this.title,
    this.small = false,
    this.buttonText,
    this.onButtonPressed,
    super.key,
  }) : super();

  final bool small;
  final String title;
  final String? buttonText;
  final VoidCallback? onButtonPressed;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      children: [
        if (!small) const Spacer(),
        const Expanded(
          flex: 2,
          child: RiveAnimation.asset(
            "assets/cute_robot.riv",
            stateMachines: ["Motion"],
          ),
        ),
        Text(
          title,
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: small ? 20 : 25, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: small ? 12 : 24),
        if (buttonText != null)
          FilledButton.icon(
            label: Text(buttonText ?? ""),
            onPressed: onButtonPressed,
            icon: const Icon(FontAwesomeIcons.plus),
          ),
        if (!small) const Spacer(),
      ],
    );
  }
}
