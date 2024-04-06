import "@testing-library/jest-dom";
import * as HELPER_FUNCTIONS from './HelperFunction';
const item={
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    },
}
describe('testing functional component ', () => {
    test("Should test setEnumDropdown", () => {
        const url = HELPER_FUNCTIONS.imageURL(item);
        expect(url).toEqual("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg");
       
    });
})