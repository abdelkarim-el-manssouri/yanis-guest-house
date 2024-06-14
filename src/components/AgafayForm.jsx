import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      delay: 1,
    },
  },
};

const AgafayForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [adultNumber, setAdultNumber] = useState("");
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const { t } = useTranslation("agafayForm");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_1tlonrk";
    const templateId = "template_ejnc764";
    const publicKey = "jKGK_J9pNuTsH65Rf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "abdelkarim el manssouri",
      from_phone: phone,
      from_date: date,
      from_people_number: adultNumber,
      from_plan: checkedValues,
      message: text,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setDisable(true);
        toast.success(
          "your request successfully sent, we will contact you soon"
        );
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setAdultNumber("");
        setCheckedValues([]);
        setText("");
        setDisable(false);
      })
      .catch(() => {
        toast.error("something went wrong, please repeat later");
      });
  };

  return (
    <motion.div
      variants={formVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full max-w-xs md:max-w-2xl lg:max-w-[950px] mx-auto p-10 mb-28 mt-10 !font-PoiretOne font-bold bg-lightGreen hover:bg-secondary/20 transition-colors duration-500 rounded-xl shadow-2xl"
    >
      <form onSubmit={handleSubmit}>
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
              <span className="capitalize font-bold ml-1">{t("people")}:</span>
              <input
                required
                min="0"
                type="number"
                value={adultNumber}
                onChange={(e) => setAdultNumber(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden focus:border-none bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6 md:col-span-2">
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

          <div className="mt-3 md:mt-6 md:col-span-2 ">
            <p className="capitalize font-bold ml-1">{t("selectPlan")}:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-3 p-5 shadow-md border border-lightGreen rounded-lg">
              <label className="flex gap-2 items-center justify-between border border-lightGreen shadow-md px-4 py-2 rounded-md bg-transparent hover:bg-secondary/20 transition duration-500 active:scale-95">
                <span className="font-semibold first-letter:uppercase text-sm">
                  {t("pack1")}
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
                  {t("pack2")}
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
                  {t("pack3")}
                </span>
                <input
                  onChange={handleChange}
                  className="rounded bg-transparent border-military text-golden focus:ring-1 focus:ring-golden"
                  type="checkbox"
                  value="Draining Massage"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
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
  );
};

export default AgafayForm;
