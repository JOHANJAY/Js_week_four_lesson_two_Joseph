class Phone {
  constructor(screenSize, chipset, ram, rom, camera, os, battery) {
    this.screenSize = screenSize;
    this.chipset = chipset;
    this.ram = ram;
    this.rom = rom;
    this.camera = camera;
    this.os = os;
    this.battery = battery;
  }
}

const s24 = new Phone(
  "6.2inches",
  "Snapdragon 8 Gen 3 (4 nm)",
  "8gb",
  "128gb",
  "50mp",
  "Android 14",
  "4000 mAh"
);

const iphone16ProMax = new Phone(
  "6.9inches",
  "Apple A18 Pro (3 nm)",
  "8gb",
  "256gb",
  "48mp",
  "ios18",
  "46385 mAh"
);

const pixel9ProXl = new Phone(
  "6.8inches",
  "Google Tensor G4 (4 nm)",
  "16gb",
  "1tb",
  "50mp",
  "Android 14",
  "5060 mAh"
);

const AsusROGPhone8Pro = new Phone(
  "6.78inches",
  "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
  "24gb",
  "1tb",
  "50mp",
  "Android 14",
  "5500 mAh"
);


