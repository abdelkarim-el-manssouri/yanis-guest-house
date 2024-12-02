import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { PiWarningOctagonBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const formVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const MassageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultNumber, setAdultNumber] = useState("");
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);

  const [adultNumberAgafay, setAdultNumberAgafay] = useState("");
  const [dateAgafay, setDateAgafay] = useState("");
  const [checkedValuesAgafay, setCheckedValuesAgafay] = useState([]);

  const [adultNumberMore, setAdultNumberMore] = useState("");
  const [dateMore, setDateMore] = useState("");
  const [checkedValuesMore, setCheckedValuesMore] = useState([]);

  const { t } = useTranslation("massageForm");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValues((pre) => [...pre, value]);
    } else {
      setCheckedValues((pre) => {
        return [...pre.filter((plan) => plan !== value)];
      });
    }
  };

  const handleChangeAgafay = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValuesAgafay((pre) => [...pre, value]);
    } else {
      setCheckedValuesAgafay((pre) => {
        return [...pre.filter((plan) => plan !== value)];
      });
    }
  };

  const handleChangeMore = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValuesMore((pre) => [...pre, value]);
    } else {
      setCheckedValuesMore((pre) => {
        return [...pre.filter((plan) => plan !== value)];
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_1u67apo";
    const templateId = "template_q8huheb";
    const publicKey = "vqeY5q7qdH7ahJQHO";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Yanis Guest House",
      from_phone: phone,
      from_date: date,
      from_time: time,
      from_people_number: adultNumber,
      from_plan: checkedValues,
      from_people_number_agafay: adultNumberAgafay,
      date_agafay: dateAgafay,
      from_plan_agafay: checkedValuesAgafay,
      from_people_number_more: adultNumberMore,
      date_more: dateMore,
      from_plan_more: checkedValuesMore,
      message: text,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setDisable(true);
        toast.success(`${t("requestSuccess")}`);
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setAdultNumber("");
        setCheckedValues([]);
        setAdultNumberAgafay("");
        setDateAgafay("");
        setCheckedValuesAgafay([]);
        setAdultNumberMore("");
        setDateMore("");
        setCheckedValuesMore([]);
        setText("");
        setDisable(false);
      })
      .catch(() => {
        toast.error(`${t("requestError")}`);
      });
  };

  return (
    <>
      <Helmet>
        <title>Yanis Guest House self care page</title>
        <meta name="description" content="self care page" />
        <link rel="canonical" href="/selfCareForm" />
      </Helmet>
      <div className="relative grid place-content-center my-10 p-8 !font-PoiretOne font-bold w-[90%] md:w-3/4 lg:w-1/2 mx-auto rounded-xl shadow-lg shadow-red-200 hover:shadow-red-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-cozyGreen to-black text-background">
        <div className="absolute top-2 left-2">
          <PiWarningOctagonBold size="20" />
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center">
          <p className="first-letter:uppercase">{t("makingAppointment")}:</p>
          <div>
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
              <p className="first-letter:uppercase">{t("afternoon")}.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-gradient-to-bl from-golden to-cozyGreen" />
              <p className="first-letter:uppercase">{t("morning")}.</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={formVariants}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        className="w-full max-w-xs md:max-w-2xl lg:max-w-[950px] mx-auto p-10 mb-28 !font-PoiretOne font-bold bg-lightGreen hover:bg-secondary/20 transition-colors duration-500 rounded-xl shadow-2xl"
      >
        <form onSubmit={handleSubmit}>
          <p className="capitalize font-bold ml-1 my-4 text-xl mb-4 underline">
            {t("massage")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">{t("name")}:</span>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">{t("email")}:</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">
                  {t("phoneNumber")}:
                </span>
                <input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">
                  {t("people")}:
                </span>
                <input
                  required
                  min="1"
                  type="number"
                  value={adultNumber}
                  onChange={(e) => setAdultNumber(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">{t("date")}:</span>
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6">
              <label>
                <span className="capitalize font-bold ml-1">{t("time")}:</span>
                <input
                  required
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                />
              </label>
            </div>

            <div className="mt-3 md:mt-6 md:col-span-2">
              <p className="capitalize font-bold ml-1">{t("selectPlan")}:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-3 p-5 shadow-md border border-lightGreen rounded-lg">
                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition duration-500 active:scale-95">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("relaxing")}
                  </span>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    value="Relaxing Massage"
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("toning")}
                  </span>
                  <input
                    onChange={handleChange}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Toning Massage"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("draining")}
                  </span>
                  <input
                    onChange={handleChange}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Draining Massage"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("couple")}
                  </span>
                  <input
                    onChange={handleChange}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Couple Massage"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("manicure")}
                  </span>
                  <input
                    onChange={handleChange}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Manicure & Pedicure"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("facial")}
                  </span>
                  <input
                    onChange={handleChange}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Facial Treatment"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="text-center font-black text-xl md:text-2xl uppercase my-20">
            <span className="px-10 py-4 border-lightGreen border rounded-md shadow-md">
              {" "}
              {t("discover")}
            </span>
          </div>

          <div className="mt-3 md:mt-6">
            <p className="capitalize font-bold ml-1 text-xl mb-4 underline">
              {t("agafay")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mt-3 md:mt-6">
                <label>
                  <span className="capitalize font-bold ml-1">
                    {t("people")}:
                  </span>
                  <input
                    min="0"
                    type="number"
                    value={adultNumberAgafay}
                    onChange={(e) => setAdultNumberAgafay(e.target.value)}
                    className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                  />
                </label>
              </div>

              <div className="mt-3 md:mt-6">
                <label>
                  <span className="capitalize font-bold ml-1">
                    {t("date")}:
                  </span>
                  <input
                    type="date"
                    value={dateAgafay}
                    onChange={(e) => setDateAgafay(e.target.value)}
                    className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div className="mt-3 md:mt-6">
              <p className="capitalize font-bold ml-1">{t("selectPlan")}:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-3 p-5 shadow-md border border-lightGreen rounded-lg">
                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition duration-500 active:scale-95">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("pack1Agafay")}
                  </span>
                  <input
                    onChange={handleChangeAgafay}
                    type="checkbox"
                    value="Pack 1"
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("pack2Agafay")}
                  </span>
                  <input
                    onChange={handleChangeAgafay}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Pack 2"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("pack3Agafay")}
                  </span>
                  <input
                    onChange={handleChangeAgafay}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Pack 3"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-3 md:mt-6">
            <p className="capitalize font-bold ml-1 mt-16 mb-4 text-xl underline">
              {t("more")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mt-3 md:mt-6">
                <label>
                  <span className="capitalize font-bold ml-1">
                    {t("people")}:
                  </span>
                  <input
                    min="0"
                    type="number"
                    value={adultNumberMore}
                    onChange={(e) => setAdultNumberMore(e.target.value)}
                    className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                  />
                </label>
              </div>

              <div className="mt-3 md:mt-6">
                <label>
                  <span className="capitalize font-bold ml-1">
                    {t("date")}:
                  </span>
                  <input
                    type="date"
                    value={dateMore}
                    onChange={(e) => setDateMore(e.target.value)}
                    className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
                  />
                </label>
              </div>
            </div>

            <div className="mt-3 md:mt-6 md:col-span-2">
              <p className="capitalize font-bold ml-1">{t("selectPlan")}:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-3 p-5 shadow-md border border-lightGreen rounded-lg">
                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition duration-500 active:scale-95">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("airBalloon")}
                  </span>
                  <input
                    onChange={handleChangeMore}
                    type="checkbox"
                    value="Air baloon"
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("Ourika")}
                  </span>
                  <input
                    onChange={handleChangeMore}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Ourika"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("Horseback")}
                  </span>
                  <input
                    onChange={handleChangeMore}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Horseback ride"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("Fantasia")}
                  </span>
                  <input
                    onChange={handleChangeMore}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Chez ali fantasia"
                  />
                </label>

                <label className="flex gap-2 items-center justify-between md:col-span-2 border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition active:scale-95 duration-500">
                  <span className="font-semibold first-letter:uppercase text-sm">
                    {t("Valleys")}
                  </span>
                  <input
                    onChange={handleChangeMore}
                    className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                    type="checkbox"
                    value="Valleys"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <label>
              <span className="first-letter:uppercase font-bold ml-1">
                {t("mind")}:
              </span>
              <textarea
                rows="10"
                type="text"
                value={text}
                placeholder={t("typeHere")}
                onChange={(e) => setText(e.target.value)}
                className="placeholder-cozyGreen/50 resize-none w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-8 md:mt-12">
            <button
              disabled={disable}
              type="submit"
              className="disabled:shadow-none disabled:text-zinc-600 disabled:scale-100 disabled:hover:bg-transparent flex justify-center items-center w-full md:w-fit gap-2 px-5 py-2 rounded-lg font-bold capitalize shadow-md focus:bg-secondary/20 hover:bg-secondary/20 transition-all duration-500 hover:scale-105 active:scale-95 active:shadow-none"
            >
              <span>{t("send")}</span>
              <FaTelegramPlane />
            </button>
          </div>
        </form>
        <Toaster
          toastOptions={{
            duration: 8000,
            style: {
              background: "#073135",
              color: "#f9f4ef",
            },
          }}
        />
      </motion.div>
    </>
  );
};

export default MassageForm;
