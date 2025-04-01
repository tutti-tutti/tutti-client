interface DaumPostcodeData {
  address: string;
  zonecode: string;
  buildingName?: string;
  apartment?: string;
}

interface DaumPostcodeOptions {
  oncomplete: (data: DaumPostcodeData) => void;
}

interface DaumPostcode {
  open: () => void;
}

interface DaumPostcodeStatic {
  Postcode: new (options: DaumPostcodeOptions) => DaumPostcode;
}

interface Window {
  daum: DaumPostcodeStatic;
}
