import { Utilities4Date } from "./dateHelper"

describe("conversion format should work",()=>{
  const test  = new Utilities4Date()
  it("from Italian to american",()=>{
    expect(test.fromItalian2AmericanFormat("16/03/1977")).toBe("03/16/1977")
  })
  it("convert from datePicker",()=>{
    const test = new Utilities4Date()
    expect(test.fromDatePickerFormat2ItalianFormat("2022-05-24")).toBe("24/05/2022")
  })
  it("add days correctly",()=>{
    const day = new Date("2022-08-18")
    expect(Utilities4Date.addDays2Date(day,2).getDate()).toBe(20)
    expect(Utilities4Date.addDays2Date(day,2).getMonth()).toBe(7)
  })
})