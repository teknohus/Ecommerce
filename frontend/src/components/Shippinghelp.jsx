import React from "react";

const Shippinghelp = () => {
  return (
    <>
      <div className="mt-16 flex flex-col gap-4 items-center justify-center">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-4">
                <h2 className="display-4">Shipping</h2>

                <div className="text-justify">
                  <p>
                    What are the delivery charges? Delivery charge varies with
                    each Seller. Sellers incur relatively higher shipping costs
                    on low value items. In such cases, charging a nominal
                    delivery charge helps them offset logistics costs. Please
                    check your order summary to understand the delivery charges
                    for individual products. For Products listed as Flipkart
                    Plus, a Rs 40 charge for delivery per item may be applied if
                    the order value is less than Rs 500. While, orders of Rs 500
                    or above are delivered free. Why does the delivery date not
                    correspond to the delivery timeline of X-Y business days? It
                    is possible that the Seller or our courier partners have a
                    holiday between the day your placed your order and the date
                    of delivery, which is based on the timelines shown on the
                    product page. In this case, we add a day to the estimated
                    date. Some courier partners and Sellers do not work on
                    Sundays and this is factored in to the delivery dates. What
                    is the estimated delivery time? Sellers generally procure
                    and ship the items within the time specified on the product
                    page. Business days exclude public holidays and Sundays.
                    Estimated delivery time depends on the following factors:
                    The Seller offering the product Product's availability with
                    the Seller The destination to which you want the order
                    shipped to and location of the Seller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shippinghelp;
