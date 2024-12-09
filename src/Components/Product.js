import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";

const Product = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col-12">
                <div className="card" style={{ margin: "5px", height: "500px" }}>
                    <img className="card-img-top" src={props.image} alt={props.productName} />
                    <div className="card-body">
                        <h5 className="card-title">{props.productName}</h5>
                        <p className="card-text">Rs. {props.price}</p>
                    </div>
                    <div className="card-footer">
                        {/* <input className="form-control mb-2 text-center" min="0" value="1" type="number"></input> */}
                        <button className="btn btn-primary float-start" onClick={e => dispatch(addItem({ id: props.id, name: props.productName, price: props.price }))} >Add to cart</button>
                        <button className="btn btn-primary float-end" onClick={e => dispatch(removeItem({ id: props.id, name: props.productName, price: props.price }))}>Remove to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;