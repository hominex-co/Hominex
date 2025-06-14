"use client";
import React, { useState, useEffect } from "react";
import {
  Residential,
  Commercial,
  Office,
  Land,
} from "@/components/UI/consultation/Forms";
import Button from "@/components/UI/consultation/Button";

enum forms {
  Residential = 1,
  Commercial = 2,
  Office = 3,
  Land = 4,
}

const Page = () => {
  // switch between tabs
  const [selectedTab, setSelectedTab] = useState<forms | null>(null);
  const handleClick = (number: number) => {
    setSelectedTab(number);
  };

  // handle array values
  const handleVitalsArr = (
    value: any,
    arr: any[],
    setArr: (a: any[]) => void
  ) => {
    if (arr.includes(value)) {
      setArr(arr.filter((item) => item !== value));
    } else {
      setArr([...arr, value]);
    }
  };

  // form values - Form.tsx
  const [price, setPrice] = useState();
  const [length, setLength] = useState();
  const [requestType, setRequestType] = useState();
  const [rooms, setRooms] = useState();
  const [vitals, setVitals] = useState([]);
  const [clientPrefer, setClientPrefer] = useState();
  const [floorPrefer, setFloorPrefer] = useState();
  const [deadline, setDeadline] = useState();
  const [visitMethod, setVisitMethod] = useState();
  const [description, setDescription] = useState();
  const [rent, setRent] = useState();
  const [mortgage, setMortgage] = useState();

  let propValues = [
    price,
    setPrice,
    length,
    setLength,
    requestType,
    setRequestType,
    rooms,
    setRooms,
    vitals,
    setVitals,
    handleVitalsArr,
    clientPrefer,
    setClientPrefer,
    floorPrefer,
    setFloorPrefer,
    deadline,
    setDeadline,
    visitMethod,
    setVisitMethod,
    description,
    setDescription,
    rent,
    setRent,
    mortgage,
    setMortgage,
  ];

  // reset values after switching the form
  useEffect(() => {
    setPrice(undefined);
    setLength(undefined);
    setRequestType(undefined);
    setRooms(undefined);
    setVitals([]);
    setClientPrefer(undefined);
    setFloorPrefer(undefined);
    setDeadline(undefined);
    setDeadline(undefined);
    setVisitMethod(undefined);
    setDescription(undefined);
    setRent(undefined);
    setMortgage(undefined);
  }, [selectedTab]);

  return (
    <div className="mt-5 mb-5">
      <div className="context">
        <h2 className="font-bold text-2xl mb-5">
          ثبت رایگان مشاوره تخصصی املاک با تحلیل هوشمند
        </h2>
        <p>
          خرید، فروش یا سرمایه ‌گذاری در املاک یکی از مهم‌ترین تصمیم‌های مالی هر
          فرد است. ما با استفاده از نقشه GIS شهری، تحلیل ‌های هوش مصنوعی و تیم
          مشاورین متخصص، ملک ‌های مختلف را از زوایای گوناگون بررسی می‌کنیم و
          بهترین گزینه را متناسب با نیاز شما پیشنهاد می‌دهیم.
        </p>
      </div>

      {/* Forms */}
      <div className="mt-10 flex flex-col gap-2 relative ">
        <div className="flex flex-row w-full gap-2 justify-stretch">
          <Button
            title="مشاوره واحد های مسکونی"
            handleFunc={handleClick}
            keyId={forms.Residential}
          />
          <Button
            title="مشاوره واحد تجاری"
            handleFunc={handleClick}
            keyId={forms.Commercial}
          />
          <Button
            title="مشاوره واحد اداری"
            handleFunc={handleClick}
            keyId={forms.Office}
          />
          <Button
            title="مشاوره زمین"
            handleFunc={handleClick}
            keyId={forms.Land}
          />
        </div>
        <div className="mainBox bg-[var(--box)]/40 backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl w-full h-auto mt-2 bottom-[-16rem] overflow-hidden p-10">
          {selectedTab === forms.Residential && (
            <Residential vals={[...propValues]} />
          )}
          {selectedTab === forms.Commercial && <Commercial />}
          {selectedTab === forms.Office && <Office />}
          {selectedTab === forms.Land && <Land />}
          {!selectedTab && (
            <>
              <p>خانه ای که میخواهید اینجاست !</p>
              <p>
                لطفاً آیتمی را انتخاب کنید تا مناسب‌ترین ملک را برای شما پیدا
                کنیم.
              </p>
              <p className="mt-10"> گذینه ای انتخاب نشده است🍃</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
