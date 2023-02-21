import { Link } from "react-router-dom";

export default function CheckoutSteps({shipping, confirmOrder, payment}) {
    return (

        <div className="checkout-progress d-flex justify-content-center mt-5">
            {
            shipping ?
            <Link to="/shipping">
                <div className="triangle2-active"></div>
                <div className="step active-step">Shipping Info</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/shipping">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Shipping Info</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            { confirmOrder ?
            <Link to="/order/confirm">
                <div className="triangle2-active"></div>
                <div className="step active-step">Confirm Order</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/order/confirm">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Confirm Order</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }

            
            { payment ?
            <Link to="/payment">
                <div className="triangle2-active"></div>
                <div className="step active-step">Payment</div>
                <div className="triangle-active"></div>
            </Link>:
             <Link to="/payment">
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Payment</div>
                <div className="triangle-incomplete"></div>
             </Link>
            }
    
      </div>
    )
}