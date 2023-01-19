import { React, useState, useEffect } from "react";
import "./styles.css";
function Container() {
  const content = {
    uses: [],
    ingredients: [],
    ratings: [],
  };
  let uses = [
    { persent: "96%", text1: "smoother", text2: "plumper, and firmer*", id: 1 },
    { persent: "91%", text1: "tighter", text2: "more lifted*", id: 2 },

    {
      persent: "83%",
      text1: "improvement",
      text2: "appearance of wrinkles*",
      id: 3,
    },
  ];

  let ingredientsArr = [
    {
      link: "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/promo/Acacia+Biopolymer.jpg",
      head1: "Acacia",
      head2: "Biopolymer",
      paragraph:
        "Derived from acacia, this ingredient forms a mesh-like network on the skin’s surface for an immediately smoother, tighter feel.",
      roll: 1,
    },
    {
      link: "	https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/promo/Biomimetic+Tripeptide.jpg",
      head1: "Biomimetic",
      head2: "Tripeptide",
      paragraph:
        "A powerful tripeptide that helps provide skin with a firmer appearance and reduce the look of wrinkles.",
      roll: 2,
    },

    {
      link: "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/promo/Firming+Peptide+Blend.jpg",
      head1: "Firming",
      head2: "Peptide Blend",
      paragraph:
        "Supports the look of springier, more supple skin while providing a significant contouring effect, especially on areas like the jawline where sagging skin is most noticeable.",
      roll: 3,
    },
  ];

  let data = [
    {
      img: "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/press/logos/refin29-logo.png",
      p: "“If you've always wondered how Moss gets her porcelain skin to look so flawless, chalk it up to this lightweight lotion, which works just as well as a base for foundation as it does alone.”",
      id: 1,
    },
    {
      img: "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/press/logos/international-logo.png",
      p: "Every woman loves to pamper her skin, and this cream from City Beauty® will help her do just that. The moisturizer is designed to restore skin elasticity while also nourishing. The product is made with all skin types in mind and is paraben, sulfate, phthalate, and gluten-free.",
      id: 2,
    },
    {
      img: "	https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/press/logos/tango-logo.png",
      p: "This moisturizer is designed to visibly restore skin’s elasticity by lifting, tightening, and firming the look of sagging skin. The formula nourishes skin with the vital building blocks that give young skin its taut, springy feel.",
      id: 3,
    },
  ];

  let ratingArr = [
    {
      id: 1,
      leftName: "Connie",
      leftsur: "Florida",
      perches: "Verified Purchase",
      photo:
        "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/review-stars.jpg",
      paragraph:
        "“I started with City Beauty®’s sculpting cream 3 weeks ago and the results are in. Fine lines are receded, my skin looks and feels firmer, the skin on my neck is no longer tissue-thin crepe (you know what I mean). It feels luxurious and a little goes a long way. This is my cream forever! It is the real deal and so is the price.”",
      p: "*Results may vary by individuals.",
    },
    {
      id: 2,
      leftName: "Janet  ",
      leftsur: "cummings",
      perches: "Verified Purchase",
      photo:
        "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/review-stars.jpg",
      paragraph:
        "“So thrilled to FINALLY get a product that works. My under-chin bag is gone, jowls are firming up and neck is tighter than it has been in fifteen years. I’m 71 and this has made a huge difference in the image I have of myself. I love it!”",
      p: "*Results may vary by individuals.",
    },

    {
      id: 3,
      leftName: "Jeanine   ",
      leftsur: "Missouri",
      perches: "Verified Purchase",
      photo:
        "https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/review-stars.jpg",
      paragraph:
        "“I have nothing but positive things to say about Multi-Action Sculpting Cream. I love the way it plumps my skin and smooths the creases on my face and neck. The cream is light, non-greasy, and absorbs beautifully into my skin without a trace of residue. I am in my late 50s and have been mistaken for my late 30s several times since using this cream!”",
      p: "*Results may vary by individuals.",
    },
  ];

  let questions = [
    {
      question: "WHICH ORDER OPTIONS IS RIGHT FOR ME?",
      answer:
        "Many of our returning customers appreciate the 3-pack because it offers the best value. And we’re happy to do it because it saves us the cost of processing individual units. If you want to try just 1 jar, we’ve already offering it for $8 off the regular price. So, you can’t go wrong with any of the options. And I know you’re going to love your younger-looking skin whichever option you choose.",
      id: 1,
    },
    {
      question: "WHEN CAN I EXPECT MY ORDER TO ARRIVE?",
      answer:
        "We know you can’t wait to start trying Multi-Action Sculpting Cream and experiencing the amazing results for yourself. That’s why our shipping department is operational 7 days a week. That way, your order leaves our facility within 24 hours. Transit usually takes 3-5 business days depending on what part of the country you’re in",
      id: 2,
    },
    {
      question: "HOW LONG DOES 1 JAR LAST?",
      answer:
        "When you use Multi-Action Sculpting Cream  directed — twice a day, once in the morning and once at night — one jar will last 4 to 6 weeks.",
      id: 3,
    },
    {
      question: "DOES CITY BEAUTY® TEST ON ANIMALS?",
      answer:
        "Never. We are committed to remaining cruelty-free and will never test our products on animals. This policy extends to any testing done by outside companies who may manufacture specific ingredients.",
      id: 4,
    },
  ];

  let products = [
    {
      name: "1  JAR",
      discount: 8,
      id: 1,
      subpersent: 22,
      quantity: 1,
      price: 67,
    },
    {
      name: "2 JAR",
      discount: 30,
      subpersent: 26,
      id: 2,
      quantity: 2,
      price: 134,
    },
    {
      name: "3 JAR",
      discount: 54,
      subpersent: 32,
      id: 3,
      quantity: 3,
      price: 201,
    },
  ];

  let imagesArr = [
    {
      link: "https://s3.us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/FS1-20210623.jpg",
      id: 2,
    },
    {
      link: "https://s3.us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/FS3-20210623.jpg",
      id: 3,
    },
    {
      link: "https://s3.us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/FS4-20210623.jpg",
      id: 4,
    },
    {
      link: "	https://s3.us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/FS2-20210623.jpg",
      id: 5,
    },
  ];

  const [id, setId] = useState(1);
  const [img, setImg] = useState(imagesArr[0]);
  const [subcribtion, setSubcribtion] = useState();
  const [classes, setClasses] = useState("subscribediv");

  const handleSubcribe = (event) => {
    let charge = event.target.value;
    setSubcribtion(charge);

    if (charge > 1) {
      setClasses("active");
    } else {
      setClasses("subscribediv");
    }
    //  subscribediv.classList.add("active")
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleChange = (e) => {
    let check = Number(e.target.dataset.id);
    setId(check);
  };

  let selectedProduct = products.find((el) => el.id === id);
  let { price, discount, subpersent } = selectedProduct;
  discount = price - discount;

  if (subcribtion > 2) {
    discount = Math.round(discount * (subpersent / 100));
  }

  return (
    <div className="main-container">
      <div className="logo-div">
        <div className="img-width">
          <img
            className="logoImg"
            src="https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/logo.png"
            alt="logo not found"
          />
        </div>
      </div>
      <div className="header-text">
        <p className="headText">
          FREE Shipping On All Orders!
          <span className="header-span"> 60-Day Money Back Guarantee</span>
        </p>
      </div>
      <section className="order">
        <div className="order-section ">
          <div className="itemImg">
            <img className="selectImg" src={img.link} alt="img not found" />
          </div>
          <div className="itemDetails">
            <ul className="nav">
              {imagesArr.map((curEl, index) => {
                return (
                  <li key={index}>
                    <img
                      className="option-img"
                      src={curEl.link}
                      id={index}
                      alt="photo not found"
                      onClick={() => setImg(curEl)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="detail-section">
          <span className="textitalic">CITY INSIDER-ONLY OFFER</span>
          <h1 className="headingWeight">Multi-Action Sculpting Cream</h1>
          <div className="star">
            <img
              src="https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/stars-rounded.png"
              alt="star img"
            />
            <span>4.9 out of 5 stars</span>
          </div>
          <p className="detail-text">
            This cream is designed to visibly restore skin’s elasticity – by
            lifting, tightening, and firming the look of sagging skin. Our
            formula nourishes your skin with the vital building blocks that give
            young skin its taut, springy feel.
          </p>

          <div className="price">
            <div className="rupay">
              <b className="rupayBold">${discount}</b>
              <s className="rupayprice">${price}</s>
            </div>
            <div className="other">
              <p className="hockey hockey1">
                <img
                  src="https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/img/checkmark14.png"
                  alt="photo"
                />
                In Stoke
              </p>
              <p className="hockey">
                {" "}
                <img
                  src="https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/img/checkmark14.png"
                  alt=""
                />{" "}
                FREE DELIVERY
              </p>
            </div>
          </div>
          <hr />
          <span className="spanmargin">SELECT PACKAGE</span>
          <div className="input">
            <div className="inputs">
              <input
                type="radio"
                id="one"
                name="rate"
                data-id="1"
                onClick={handleChange}
              />
              <label htmlFor="one" className="dolor">
                <b>1 JAR</b>
                <p className="goldenColor">(Save $08)</p>
              </label>
            </div>
            <div className="inputs inputradio">
              {" "}
              <input
                type="radio"
                name="rate"
                id="two"
                data-id="2"
                onClick={handleChange}
              />
              <label htmlFor="two" className="dolor">
                {" "}
                <b>2 JAR</b>
                <p className="goldenColor">(Save $30)</p>
              </label>
            </div>
            <div className="inputs">
              <input
                type="radio"
                name="rate"
                id="three"
                data-id="3"
                onClick={handleChange}
              />
              <label htmlFor="three" className="dolor">
                <b>3 JAR</b>
                <p className="goldenColor">(Save $54)</p>
              </label>
            </div>
          </div>
          <span className="spanmargin">FREQUENCY</span>
          <div className="flex marginTop">
            <div className="inputs">
              <input
                type="radio"
                id="radio4"
                name="subscribe"
                onClick={handleSubcribe}
                data-unic="1"
                value={1}
              />
              <label htmlFor="radio4" className="marginright">
                ONE-TIME PURCHASE
              </label>
            </div>

            <div className="inputs marginright">
              <input
                type="radio"
                id="radio5"
                name="subscribe"
                onClick={handleSubcribe}
                data-unic="2"
                value={22}
              />
              <label htmlFor="radio5" className="marginright">
                SUBSCRIBE & SAVE ({subpersent}%)
              </label>
            </div>
          </div>
          <div className={classes}>
            <h3 className="text-center subhead">JOIN</h3>
            <h2 className="text-center subhead">CITY GOLD INSIDER</h2>
            <h3 className="text-center subhead"> AND SAVE BIG </h3>
            <hr className="goldenColor" />
          </div>

          <button className="addtocardbtn" value={66}>
            ADD TO CARD -<span>Save $66</span>
          </button>
        </div>
      </section>
      <section className="contentsec">
        <div className="content-detail">
          <div className="contentImg">
            <img
              src="	https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/MBG-20-12-14.png"
              alt="photo images"
            />
          </div>
          <div className="content-text">
            <h1>
              We want you to love your purchase - 100% Money Back Guarantee
            </h1>

            <p>
              That's why every product is covered by our 60-Day Money-Back
              Guarantee. Try it for 60 days and if you're not completely
              satisfied, for any reason, send it back and we'll refund the full
              amount of your purchase. No questions asked. Please contact us at{" "}
              <b> support@citybeauty.com </b>or <b> (800) 347-1558</b> for
              return instructions.
            </p>
          </div>
        </div>
      </section>
      <section className="itemUsed">
        <div className="head">
          <h1 className="text-center w-100">Real Results</h1>
          <h3 className="text-center w-100">
            After just 8 weeks, users said...
          </h3>
        </div>
        <div className="ratings ">
          {uses.map((el) => {
            return (
              <div className="divrating" key={el.id}>
                <h3 className="text-center m-auto">{el.persent}</h3>
                <p>
                  of users said their skin looks and feels <b>{el.text1}</b> ,{" "}
                  <b>{el.text2}</b>*
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="advertisement w-100 d-flex">
        <div className="img ">
          <img
            src="https://s3-us-west-2.amazonaws.com/cdn.citybeauty.com/images/masc/MODEL.png"
            alt="photo"
          />
        </div>
        <div className="d-flex flex-column text-left   justify-content-center adverrightText">
          <h3>Clean Beauty and Cruelty-Free</h3>
          <p className="lineGap">
            Each of our products are designed to make you look good, but also
            feel good — which is why we formulate with a combination of natural
            and clinically tested synthetic ingredients.
          </p>

          <p>
            As a Leaping-Bunny and PETA certified brand, we also pride ourselves
            on being a cruelty-free company and always ensure our products go
            through the most rigorous quality testing.
          </p>
          <div className="d-flex advices">
            <span className="bold">NO PARABENS</span>

            <span className="marginleft bold"> NO SULFATES</span>

            <span className="marginleft bold"> NO PHTHALATES</span>

            <span className="marginleft bold"> NO MINERAL OIL</span>
          </div>
        </div>
      </section>

      <section className="ingredients">
        <h2 className="w-100 text-center my-5">Naturally Created With</h2>
        <div className="d-flex naturaldiv w-100 m-auto">
          {ingredientsArr.map((el) => {
            return (
              <div className="w-100 " key={el.roll}>
                <div className="imgdiv">
                  <img src={el.link} alt="image" />
                </div>
                <div className="imgdiv p-2">
                  <h3>{el.head1}</h3>
                  <h3>{el.head2}</h3>
                  <p>{el.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="pressInner">
        <h3 className="text-center ">As Seen On</h3>

        <div className="pressInnerDiv d-flex mt-4">
          {data.map((el) => {
            return (
              <div key={el.id} className="mx-3">
                <img src={el.img} className="imgset my-3" alt="photo" />
                <p>{el.p}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="vidios m-auto">
        <h2 className="text-center vidiohead">
          Real Stories From Recent Customers
        </h2>
       
        <div className="rating d-flex flex-column ">
          <div className="w-100 m-auto">
            {ratingArr.map((el) => {
              return (
                <div className="d-flex ratingpeople m-auto" key={el.id}>
                  <div className="left w-25 ">
                    <h6>{el.leftName}</h6>
                    <p>{el.leftsur}</p>
                    <p>{el.perches}</p>
                  </div>
                  <div className="rightText ">
                    <img src={el.photo} alt="starphoto" />
                    <p>{el.paragraph}</p>

                    <p>{el.p}</p>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="ourService  ">
        <div className="ourServices  max-width m-auto p-3">
          <h3 className="text-left">Frequently Asked Questions</h3>
          <div className="questions">
            {questions.map((el) => {
              return (
                <div key={el.id}>
                  <h6 className=" questionHead">{el.question}</h6>
                  <p className="text-left ">{el.answer}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="orderDown d-flex flex-column text-center align-center">
        <h2>Try Multi-Action Sculpting Cream Risk-Free!</h2>
        <p>60-Day Money Back Guarantee</p>
        <button className="submit button m-auto" onClick={handleSubmit}>
          ORDER NOW
        </button>
      </section>
    </div>
  );
}

export default Container;
