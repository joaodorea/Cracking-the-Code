import { isUnique, checkPermutation } from './ArraysStrings';

describe("Arrays and strings", () => {
  it("should check if a string has all characters unique", () => {
    const str01 = "This string is not unique";
    const result01 = isUnique(str01);

    const str02 = "abc def ghi";
    const result02 = isUnique(str02);

    expect(result01).toBeFalsy();
    expect(result02).toBeTruthy();
  });
  it("should checks if a string is a permutation of the other", () => {
    const result01 = checkPermutation("ccheckPermutation", "hkPttcemucseraion");;
    const result02 = checkPermutation("checkPermutation", "hkPttcemuceraion");;

    expect(result01).toBeFalsy();
    expect(result02).toBeTruthy();
  });
});