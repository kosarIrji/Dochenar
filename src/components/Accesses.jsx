/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";
import Accordion from "./ui/Accordion";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
دسترسی محله ی             {Details.alley.name}{" "}
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله دوچنار در قلب بافت مرکزی بجنورد قرار دارد و به‌دلیل مجاورت با
            خیابان‌های اصلی شهر، از دسترسی خوبی به نواحی مختلف برخوردار است.
            هرچند شبکه دسترسی درون‌محله‌ای نسبتاً منظم است، اما وجود معابر
            کم‌عرض، یک‌طرفه و بن‌بست‌های متعدد، حرکت روان در داخل محله را با
            اختلال‌هایی روبه‌رو کرده است. در ساعات پرتردد، به‌ویژه در تقاطع‌های
            منتهی به خیابان‌های اصلی، گره‌های ترافیکی قابل‌توجهی شکل می‌گیرد.
            <br />
          </p>
          <div className=" bg-white/40  border-r-4 border-orange-800 shadow-md mb-1 p-2 ">
            <span className="text-orange-800">
              میانگین امتیاز معابر :33 / 50 (نسبتا خوب )
            </span>{" "}
            در اگرچه ترافیک یکی از چالش‌های محله است، اما مسیرهای پیاده‌رو و
            دسترسی به حمل‌ونقل عمومی شرایط رفت‌وآمد را برای ساکنان تسهیل
            کرده‌اند.
          </div>
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-red-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                معابر اصلی :
              </span>
            }
            content={
              <ul>
                <li>▪خیابان امیریه (غرب)</li>{" "}
                <li>▪بلوار امام خمینی (جنوب)</li>
                <li>▪بلوار امام خمینی (جنوب)</li>
                <li>▪خیابان شهیدبهشتی جنوب (شرق)</li>
              </ul>
            }
          />{" "}
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-blue-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                تقاطع‌های مهم:
              </span>
            }
            content={
              <ul>
                <li>▪چهارراه امیریه</li> <li>▪چهارراه مخابرات</li>
                <li>▪میدان شهید</li> <li>▪میدان فردوسی </li>
                <li>▪چهارراه قیام</li> <li>▪میدان کارگر</li>
              </ul>
            }
          />{" "}
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right text-green-700"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                معابر مهم درون‌محله‌ای:
              </span>
            }
            content={
              <ul>
                <li>▪	خیابان برنجی  (شرقی-غربی)<br/>یکی از معابر پرتردد و مهم محله که ارتباط بین معابر داخلی را برقرار کرده و نقش تجاری چشمگیری دارد.</li> 
                <li>▪	خیابان دوچنار  (شمالی- جنوبی)<br/> خیابان قدیمی و یک‌طرفه با کیفیت خوب که ترافیک محله را کاهش می‌دهد و جزو خیابان‌های تجاری مهم شهر است.</li>
              </ul>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
