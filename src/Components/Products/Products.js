import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    const navigate = useNavigate()

    const {data, refetch, isLoading}= useQuery("products",()=> fetch('https://hidden-thicket-51084.herokuapp.com/allProducts').then(res=> res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div className='container'>
            <h1 className='mt-5 mb-lg-2'>Top 6 Products</h1>
            <div className='mb-5'>
                <div className="row mt-3 g-5">
                    {
                        data.slice(0,6).map(p=> <ProductCard key={p._id} product={p}></ProductCard>)
                    }
                </div>
                <button className='btn btn-outline-secondary mt-5' onClick={()=>navigate('/allinventory')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;