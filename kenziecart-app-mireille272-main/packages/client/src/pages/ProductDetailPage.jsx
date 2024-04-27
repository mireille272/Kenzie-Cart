import React from 'react'
import { Container } from 'react-bootstrap'
import { ErrorBoundary, LoadingSpinner } from '../components'
import { useAxios } from '../hooks'
import ProductBox from '../components/ProductBox/index'
import { useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { pid } = useParams();

  const { data, loading, error } = useAxios({
    config: { url: `products/${pid}` },
  });

  return (
    <Container className="h-100">
      <ErrorBoundary>
        {error ? (
          <p>Error...</p>
        ) : (
          (() => {
            switch (loading) {
              case false:
                return <ProductBox product={data} />;
              case true:
                return <LoadingSpinner full />;
              default:
                return null;
            }
          })()
        )}
      </ErrorBoundary>
    </Container>
  );
}

export default ProductDetailPage;






// export default function ProductDetailPage({
 
// }) {
//   const { data, loading, error } = useAxios({
//     config: { url: `products/${pid}` },
//   })

//   return (
//     <Container className='h-100'>
//       <ErrorBoundary>
//         {error ? (
//           <p>Error...</p>
//         ) : (
//           (() => {
//             switch (loading) {
//               case false:
//                 return <ProductBox product={data} />
//               case true:
//                 return <LoadingSpinner full />
//               default:
//                 return null
//             }
//           })()
//         )}
//       </ErrorBoundary>
//     </Container>
//   )
// }
