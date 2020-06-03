interface Laptop {
  merk: string;
  off(): void;
  on(): void;
}

class Asus implements Laptop {
  merk: string;
  isGaming: boolean;
  constructor(merk: string, isGaming: boolean) {
    this.merk = merk;
    this.isGaming = isGaming;
  }
  off(): void {
    console.log("Dead");
  }
  on(): void {
    console.log("Life");
  }
}
