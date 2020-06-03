// tipe data balikan function

function getName(): string {
  return "wildan";
}

function getAge(): number {
  return 123;
}
function printName(): void {
  console.log("ali wildan");
}

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
//function type

type Tambah = (x: number, y: number) => number;

const myAdd: Tambah = (x: number, y: number): number => {
  return x + y;
};

//' default parameter
const fullname = (first: string, last: string = "Wildan"): string => {
  return first + " " + last;
};

// optional parameter, hanya cocok digunakan untuk parameter string, atau return string
const myname = (first: string, last ?: string): string => {
  return first + " " + last;
};
