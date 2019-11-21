import { getSortedContactList, getContactsSelectedByKey, getCountOfContactsSelectedByKey, convertToUpper, getContactCardPosition } from "./ContactListViewModel";
import ContactStub from "../../../shared/Stubs/ContactStub";
import ContactStubSorted from "../../../shared/Stubs/ContactStubSorted";


describe('ContactListViewModel', () => {

    it('should call getSortedContactList and return a list of contacts in order', () => {
        const expected = ContactStubSorted;
        const actual = getSortedContactList(ContactStub);
        expect(actual[0].name.last).toEqual(expected[0].name.last);
    });

    it('should call getSortedContactList and return same list because they are already in sorted order', () => {
        const expected = ContactStubSorted;
        const actual = getSortedContactList(ContactStubSorted);
        expect(actual[0].name.last).toEqual(expected[0].name.last);
    });

    it(`should call getContactsSelectedByKey and return a sorted list 
        of contacts with respect to the key parameter`, () => {
        const actual = getContactsSelectedByKey(ContactStub, "t");
        expect(actual[0].name.last[0]).toEqual("T");
    });

    it(`should call getContactsSelectedByKey and return a same list 
        of contacts with respect to the key parameter`, () => {
        const actual = getContactsSelectedByKey(ContactStubSorted, "l");
        expect(actual[0].name.last[0]).toEqual("L");
    });

    it(`should call getCountOfContactsSelectedByKey and return a count 
    of contacts with respect to the key parameter`, () => {
        const actual = getCountOfContactsSelectedByKey(ContactStub, "t");
        expect(actual).toEqual(1);
    });

    it(`should call convertToUpper and return text in upper case`, () => {
        const actual = convertToUpper("test");
        expect(actual).toEqual("TEST");
    });

    it(`should call getContactCardPosition and return an object with values greater than 0`, () => {
        const actual = getContactCardPosition({left: 200, width: 50, top: 350, height: 40});
        expect(actual.x).toBeGreaterThan(0);
        expect(actual.y).toBeGreaterThan(0);
    });


});