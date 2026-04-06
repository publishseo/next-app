import React from 'react';

const defaultProduct = {
  name: 'Product Name',
  price: 99.99,
  compareAtPrice: 129.99,
  description: 'A brief product description goes here.',
  images: ['/toy.jpg'],
  variants: [],
  rating: 4.5,
  reviews: 128,
  inStock: true,
};

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    } else if (i - rating < 1) {
      stars.push(<span key={i} className="text-yellow-400">&#9734;</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">&#9734;</span>);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};

const ImageGallery = ({ images, name }) => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[active] || images[0]}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 object-cover transition ${
                active === index ? 'border-black' : 'border-transparent'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const EcommerceProductDisplay = ({ product = defaultProduct }) => {
  const {
    name,
    price,
    compareAtPrice,
    description,
    images = defaultProduct.images,
    variants = defaultProduct.variants,
    rating,
    reviews,
    inStock,
  } = product;

  return (
    <div className="ecommerce-product-display">
      <div className="mx-auto max-w-6xl p-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery */}
          <ImageGallery images={images} name={name} />

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold  text-start!">{name}</h1>

            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-sm text-gray-500">({reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold">${price.toFixed(2)}</span>
              {compareAtPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600">{description}</p>

            {/* Variants */}
            {variants.length > 0 &&
              variants.map((variant) => (
                <div key={variant.name} className="flex flex-col gap-2">
                  <span className="text-sm font-medium">{variant.name}</span>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="rounded-md border border-gray-300 px-3 py-1 text-sm transition hover:border-black"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

            {/* Stock Status */}
            <div className="text-sm">
              {inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                disabled={!inStock}
                className={`flex-1 rounded-lg px-6 py-3 text-white font-medium transition ${
                  inStock
                    ? 'bg-black hover:bg-gray-800'
                    : 'cursor-not-allowed bg-gray-300'
                }`}
              >
                {inStock ? 'Add to Cart' : 'Sold Out'}
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-300 px-4 py-3 transition hover:border-black"
              >
                &#9825;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProductDisplay;
