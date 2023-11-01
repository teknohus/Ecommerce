import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "/contact_us",
      },
      {
        name: "About Us",
        redirect: "/aboutus",
      },
      // {
      //   name: "Careers",
      //   redirect: "",
      // },
      // {
      //   name: "Flipkart Stories",
      //   redirect: "",
      // },
      // {
      //   name: "Press",
      //   redirect: "",
      // },
      // {
      //   name: "Flipkart Wholesale",
      //   redirect: "",
      // },
      {
        name: "Corporate Information",
        redirect: "/corporate_information",
      },
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "/payments_help",
      },
      {
        name: "Shipping",
        redirect: "/shipping_help",
      },
      {
        name: "Cancellation & Returns",
        redirect: "/cancellation_returns_help",
      },
      // {
      //   name: "FAQ",
      //   redirect: "",
      // }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "/return_policy",
      },
      // {
      //   name: "Terms Of Use",
      //   redirect: "/terms_of_use",
      // },
      // {
      //   name: "Security",
      //   redirect: "/security",
      // },
      {
        name: "Privacy",
        redirect: "/privacy_policy",
      },
      // {
      //   name: "Sitemap",
      //   redirect: "/sitemap_policy",
      // },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "/facebook",
      },
      {
        name: "Instagram",
        redirect: "/instagram",
      },
      // {
      //   name: "Twitter",
      //   redirect: "",
      // },
      // {
      //   name: "YouTube",
        // redirect: "",
      // }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">Forever Store Internet Private Limited,<br />
                  Buildings Alyssa, Begonia &<br />
                  {/* Clove Embassy Tech Village,<br /> */}
                  {/* Outer Ring Road, Devarabeesanahalli Village,<br /> */}
                  Bengaluru, 560103,<br />
                  Karnataka, India
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Forever Store Internet Private Limited,<br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,<br />
                  {/* Outer Ring Road, Devarabeesanahalli Village,<br /> */}
                  {/* Bengaluru, 560103,<br /> */}
                  Karnataka, India <br />
                  {/* CIN : U51109KA2012PTC066107<br /> */}
                  Telephone: <a className="text-primary-blue  tel:18002029898">1800 202 9898</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            {/* <a href="" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Flipkart
            </a> */}
            {/* <a href="" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a> */}
            {/* <a href="" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a> */}
            {/* <a href="/payments_help" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a> */}

            {/* <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span> */}
            <span>&copy; 2023-{new Date().getFullYear()} ForEver Store</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
