/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform } from "framer-motion";

const EmailForm = ({ t }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adultNumber, setAdultNumber] = useState("");
  const [kidsNumber, setKidsNumber] = useState("");
  const [room, setRoom] = useState("");
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_1u67apo";
    const templateId = "template_giedyfq";
    const publicKey = "vqeY5q7qdH7ahJQHO";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Yanis Guest House",
      from_phone: phone,
      from_begin_date: beginDate,
      from_end_date: endDate,
      from_adult_number: adultNumber,
      from_kids_number: kidsNumber,
      from_room: room,
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
        setBeginDate("");
        setEndDate("");
        setAdultNumber("");
        setKidsNumber("");
        setRoom("");
        setText("");
        setDisable(false);
      })
      .catch(() => {
        toast.error(`${t("requestError")}`);
      });
  };

  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <motion.div
      ref={formRef}
      style={{ scale, opacity }}
      className="w-full max-w-xs md:max-w-2xl lg:max-w-[950px] font-PoiretOne font-bold mx-auto p-10 mt-16 mb-28 bg-lightGreen hover:bg-secondary/20 transition-colors duration-500 rounded-xl shadow-2xl"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">{t("name")}:</span>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
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
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
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
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">{t("checkin")}:</span>
              <input
                required
                type="date"
                value={beginDate}
                onChange={(e) => setBeginDate(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">
                {t("checkOut")}:
              </span>
              <input
                required
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">{t("adults")}:</span>
              <input
                required
                min="0"
                type="number"
                value={adultNumber}
                onChange={(e) => setAdultNumber(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">{t("kids")}:</span>
              <input
                required
                min="0"
                type="number"
                value={kidsNumber}
                onChange={(e) => setKidsNumber(e.target.value)}
                className="w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg"
              />
            </label>
          </div>

          <div className="mt-3 md:mt-6">
            <label>
              <span className="capitalize font-bold ml-1">{t("room")}:</span>
              <select
                required
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="flex justify-between w-full mt-3 px-3 py-2 shadow-md focus:outline-none focus:ring-1 focus:ring-golden bg-transparent focus:bg-secondary/20 hover:bg-secondary/20 transition-colors duration-500 border border-lightGreen rounded-lg appearance-none"
              >
                <option disabled value="">
                  {t("selectRoom")}
                </option>
                {/* <FaChevronDown /> */}
                <option value="suite exécutif">{t("imgTitle1")}</option>
                <option value="chambre double">{t("imgTitle2")}</option>
                <option value="suite junior">{t("imgTitle3")}</option>
                <option value="Suite Presidentielle">{t("imgTitle4")}</option>
                <option value="suite familiale">{t("imgTitle5")}</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mt-6">
          <label>
            <span className="first-letter:uppercase font-bold ml-1">
              {t("message")}:
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

export default EmailForm;
