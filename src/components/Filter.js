import React, { Component } from 'react';
import {filterProducts} from '../actions/productActions';
import {connect} from 'react-redux';

class Filter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-md-4">
                    {this.props.count} Results Found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order By 
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeToSort}>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest To Lowest</option>

                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Sort By 
                        <select className="form-control" value={this.props.size} 
                        onChange={(e)=> this.props.filterProducts(this.props.products,e.target.value)}>
                        <option value="">ALL</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items , 
    size: state.products.size
})
export default connect(mapStateToProps , {filterProducts})(Filter);