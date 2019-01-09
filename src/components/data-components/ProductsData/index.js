import React from 'react';
import {PRODUCTS} from '../../../data';
import './styles.scss';

const ProductsData = (ComposedComponent) =>
    class ProductsDataComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                products: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {

            this.setState({loading:true})

            //Эмулируем работу с сервером
            this.timeoutId = setTimeout(() => this.setState({
                loaded: true,
                loading: false,
                products: PRODUCTS
            }), 500);

        }

        componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }

        render() {
            return (
                <div className="products-data">
                    {(this.state.loading) ?
                        <div className="products-data__loading">Loading...</div> :
                        <ComposedComponent {...this.state} {...this.props} />}
                </div>
            )
        }
    }

export default ProductsData;