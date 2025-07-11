import PlantCard from '../components/PlantCard';
import products from '../data/products';

function ProductPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Our Houseplants</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
