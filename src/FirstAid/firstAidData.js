// src/data/firstAidData.js
const firstAidData = [
    {
      condition: "Burn",
      steps: [
        "Remove person from source of burn.",
        "Cool the burn under running water for 10+ minutes.",
        "Cover with clean cloth.",
        "Seek medical help if severe."
      ],
      precautions: [
        "Do not use ice or butter.",
        "Do not burst blisters."
      ],
      icon: "FaFireAlt"  // Burn icon
    },
    {
      condition: "Bleeding",
      steps: [
        "Apply pressure with clean cloth.",
        "Elevate the wound if possible.",
        "Add more cloth if soaked.",
        "Seek help if bleeding continues."
      ],
      precautions: [
        "Don't use dirty materials.",
        "Do not remove deep embedded objects."
      ],
      icon: "FaBandAid"  // Bleeding icon
    },
    {
      condition: "Heart Attack",
      steps: [
        "Call emergency services immediately.",
        "Have the person chew an aspirin (if available and they're not allergic).",
        "Keep the person calm and seated.",
        "Perform CPR if the person stops breathing."
      ],
      precautions: [
        "Do not let the person walk.",
        "Do not give them food or drink."
      ],
      icon: "FaAmbulance"  // Heart Attack icon
    },
    {
      condition: "Choking",
      steps: [
        "Ask the person to cough if they're able to.",
        "Perform the Heimlich maneuver (abdominal thrusts) if the airway is blocked.",
        "Call emergency services if the object is not dislodged.",
        "If the person becomes unconscious, begin CPR."
      ],
      precautions: [
        "Do not slap the person on the back.",
        "Do not try to remove the object with your fingers if they are unable to cough."
      ],
      icon: "FaHandHoldingHeart"  // Choking icon
    },
    {
      condition: "Fracture",
      steps: [
        "Immobilize the affected area with a splint.",
        "Apply ice to reduce swelling.",
        "Avoid moving the injured person.",
        "Seek medical attention immediately."
      ],
      precautions: [
        "Do not attempt to straighten the bone.",
        "Do not put pressure on the injured area."
      ],
      icon: "FaHeartbeat"  // Fracture icon
    },
    {
      condition: "Allergic Reaction",
      steps: [
        "Administer epinephrine (if available).",
        "Call emergency services immediately.",
        "Lay the person flat and elevate their legs if possible.",
        "Monitor for breathing and administer CPR if necessary."
      ],
      precautions: [
        "Do not give them anything to eat or drink.",
        "Do not try to make the person vomit."
      ],
      icon: "FaAllergies"  // Allergic Reaction icon
    },
    {
      condition: "Heat Stroke",
      steps: [
        "Move the person to a cooler environment.",
        "Remove excess clothing and cool the person with water or cool cloths.",
        "Give them small sips of cool water if they're conscious.",
        "Seek medical attention immediately."
      ],
      precautions: [
        "Do not give the person alcohol or caffeine.",
        "Do not cool the person too quickly, as this can cause shock."
      ],
      icon: "FaSun"  // Heat Stroke icon
    },
    {
      condition: "Hypothermia",
      steps: [
        "Move the person to a warmer environment.",
        "Remove wet clothing and wrap them in warm, dry blankets.",
        "Give them warm, non-alcoholic beverages if they're conscious.",
        "Seek medical help immediately."
      ],
      precautions: [
        "Do not warm the person too quickly (avoid hot water or direct heat).",
        "Do not give them alcohol."
      ],
      icon: "FaSnowflake"  // Hypothermia icon
    },
    {
      condition: "Asthma Attack",
      steps: [
        "Help the person use their inhaler or prescribed medication.",
        "Encourage them to sit up and breathe slowly.",
        "If symptoms don't improve, call emergency services."
      ],
      precautions: [
        "Do not try to force the person to lie down.",
        "Do not give them anything to eat or drink during the attack."
      ],
      icon: "FaLungs"  // Asthma Attack icon
    },
    {
      condition: "Seizure",
      steps: [
        "Clear the area of any hazards to prevent injury.",
        "Place something soft (like a folded cloth) under their head.",
        "Do not restrain the person or try to put anything in their mouth.",
        "Call emergency services if the seizure lasts more than 5 minutes."
      ],
      precautions: [
        "Do not attempt to hold the person down.",
        "Do not give them food or water immediately after the seizure."
      ],
      icon: "FaBolt"  // Seizure icon
    }
];

export default firstAidData;
