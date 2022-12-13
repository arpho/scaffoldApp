import { ExpectedConditions } from "protractor"
import { Piu2meno90 } from "../business/piu2meno90"
import { Extraction } from "./extractionModel"

describe("extraction should load data",()=>{
it("load full data",()=>{
  const data = {
    date:"06/12/1941",
    weel:"Bari",
    extraction:["24","39","53","23","49"]
  }
  const test = new Extraction(data)
  expect(test.weel).toEqual(data.weel)
  expect(test.extraction.length).toBe(5)
  expect(test.extraction[0]).toBe(24)
  expect(test._dateInmsec).toBe(new Date("12/06/1941").getTime())
  expect(test.serialize().weel).toBe(data.weel)
  expect(test.serialize().dateInmsec).toBe(new Date("12/06/1941").getTime())
  expect(test.serialize().extraction[0]).toBe(24)})
})
it("should work with partial data",()=>{

  const data ={
    dateInmmsec:new Date("03/16/1977").getTime(),
   weel:"Bari",
   id:"qwert"

  }
  const test = new Extraction(data)
  expect(test.date).toEqual("16/03/1977")
  expect(test.serialize().extraction.length).toBe(0)
  expect(test.serialize().dateInmsec).toBe(data.dateInmmsec)
})
it("should work with date after september",()=>{

  const data ={
    dateInmmsec:new Date("10/16/1977").getTime(),
   weel:"Bari",
   id:"qwert"

  }
  const test = new Extraction(data)
  expect(test.date).toEqual("16/10/1977")
  expect(test.id).toBe(data.id)
  expect(test.serialize().extraction.length).toBe(0)
  expect(test.serialize().dateInmsec).toBe(data.dateInmmsec)
})

it("date should be converted",()=>{
  const data= {
    date:"26/02/2022",
    "weel":"Roma"

  }
  const test = new Extraction(data)
  expect(test.dateInmmsec).toBe(new Date("02/26/2022").getTime())
  expect(test.date).toBe("02/26/2022")
})
it("should create with no parameter",()=>{

  const test = new Extraction()
  expect(test).toBeDefined()
})

it( "should transform extraction",()=>{
  const data = {
    date:"06/12/1941",
    weel:"Bari",
    extraction:["24","39","53","23","49"]
  }
  const test = new Extraction(data)
  const transformation = new Piu2meno90()
  expect(test.apply(transformation).extraction[0]).toBe(64)
  expect(test.apply(transformation).extraction[1]).toBe(49)
  expect(test.apply(transformation).extraction[2]).toBe(35)
  expect(test.apply(transformation).extraction[3]).toBe(65)
  expect(test.apply(transformation).extraction[4]).toBe(39)
})
it("should load with italianDate",()=>{
  const data = {
    "date": "16/04/2022",
    "extraction": [
      47,
      90,
      39,
      40,
      85
    ],
    "weel": "Bari"
  }
  const test = new Extraction(data)
  expect(test).toBeDefined()
  expect(test.date).toBe("04/16/2022")
  expect(test.italianDate).toBe("16/04/2022")
})

it("extraction.isPresent should work",()=>{
  const data = {
    "date": "16/04/2022",
    "extraction": [
      47,
      90,
      39,
      40,
      85
    ],
    "weel": "Bari"
  }
  const test = new Extraction(data)
  expect(test.isPresent(47)).toBeTrue()
  expect(test.isPresent(85)).toBeTrue()
  expect(test.isPresent(4)).toBeTrue()
  expect(test.isPresent(5)).toBeFalse()
  expect(test.isPresent(84)).toBeFalse()
  expect(test.isPresent(57)).toBeFalse()
  expect(test.isPresent(67)).toBeFalse()
})

