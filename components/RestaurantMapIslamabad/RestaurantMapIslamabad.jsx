"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import React, { useEffect, useState } from "react";
import L from "leaflet";

// Fix default icon path issues in React/Next.js
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src || icon,
  shadowUrl: iconShadow.src || iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Red circle with white text for marker clusters
const createClusterIcon = (cluster) => {
  const count = cluster.getChildCount();
  return L.divIcon({
    html: `<span class="cluster-text">${count}</span>`,
    className: "marker-cluster-custom",
    iconSize: L.point(40, 40),
  });
};

const clusterOptions = {
  iconCreateFunction: createClusterIcon,
};

const restaurants = [
  {
    name: "Monal",
    cuisine: "Pakistani / Continental",
    rating: 4.4,
    priceRange: "$$$$",
    position: [33.7294, 73.0314],
    address: "Pir Sohawa Road, Margalla Hills",
  },
  {
    name: "La Fontaine",
    cuisine: "Continental / Italian",
    rating: 4.3,
    priceRange: "$$$",
    position: [33.7283, 73.0832],
    address: "Shakarparian Hills, Khayaban-e-Suhrawardy",
  },
  {
    name: "Savor Foods",
    cuisine: "Pakistani / BBQ",
    rating: 4.0,
    priceRange: "$$",
    position: [33.6844, 73.0481],
    address: "F-8 Markaz",
  },
  {
    name: "Nihari Point",
    cuisine: "Pakistani / Nihari",
    rating: 4.2,
    priceRange: "$$",
    position: [33.7089, 73.0337],
    address: "F-7 Markaz, Islamabad",
  },
  {
    name: "The Monal Garden",
    cuisine: "Pakistani / Chinese",
    rating: 4.1,
    priceRange: "$$$",
    position: [33.701, 73.04],
    address: "F-7, Islamabad",
  },
  {
    name: "Burns Garden Restaurant",
    cuisine: "Pakistani / BBQ / Steak",
    rating: 4.3,
    priceRange: "$$$",
    position: [33.7188, 73.0519],
    address: "F-6, Islamabad",
  },
  {
    name: "Cafe Aylanto",
    cuisine: "Italian / Mediterranean",
    rating: 4.2,
    priceRange: "$$$$",
    position: [33.7192, 73.0527],
    address: "Sukh Chayn Gardens, G-6",
  },
  {
    name: "Fresco",
    cuisine: "Italian / Continental",
    rating: 4.1,
    priceRange: "$$$$",
    position: [33.7311, 73.0826],
    address: "Islamabad Club",
  },
  {
    name: "Kabab King",
    cuisine: "Pakistani / BBQ",
    rating: 4.0,
    priceRange: "$$",
    position: [33.7095, 73.0525],
    address: "F-7 Markaz",
  },
  {
    name: "Coconut Lagoon",
    cuisine: "South Indian / Kerala",
    rating: 4.1,
    priceRange: "$$$",
    position: [33.7295, 73.0914],
    address: "F-10, Islamabad",
  },
  {
    name: "Salt n Pepper Village",
    cuisine: "Pakistani / Continental",
    rating: 4.0,
    priceRange: "$$$",
    position: [33.731, 73.0731],
    address: "Margalla Avenue",
  },
  {
    name: "Broccoli",
    cuisine: "Continental / Asian",
    rating: 3.9,
    priceRange: "$$-$$$",
    position: [33.7117, 73.0419],
    address: "F-7, Jinnah Super",
  },
  {
    name: "Pakola Corner",
    cuisine: "Pakistani / Fast Food",
    rating: 3.8,
    priceRange: "$",
    position: [33.6888, 73.0534],
    address: "Blue Area, Islamabad",
  },
  {
    name: "Chop-Chop Grill",
    cuisine: "Japanese / Korean / Thai",
    rating: 4.0,
    priceRange: "$$$",
    position: [33.7388, 73.0666],
    address: "G-9 Markaz, Islamabad",
  },
  {
    name: "F-8 Karahi Gosh",
    cuisine: "Pakistani / Karahi",
    rating: 4.1,
    priceRange: "$$",
    position: [33.697, 73.035],
    address: "F-8 Market, Islamabad",
  },
];

// Islamabad center position
const ISLAMABAD_CENTER = [33.6844, 73.08];

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

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, rating, priceRange, address } = restaurant;
  return (
    <div className="flex flex-col gap-1 p-2">
      <h3 className="text-base font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{cuisine}</p>
      <div className="flex items-center gap-2">
        <StarRating rating={rating} />
        <span className="text-xs text-gray-500">{rating}</span>
      </div>
      <p className="text-sm">{priceRange}</p>
      <p className="text-xs text-gray-500">{address}</p>
    </div>
  );
};

const RestaurantMapIslamabad = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="restaurant-map-islamabad">
        <div className="mx-auto max-w-6xl p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Restaurants in Islamabad
          </h2>
          {/* Required height */}
          <div className="h-[500px] w-full rounded-xl bg-gray-100">
            <p>Loading map...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-map-islamabad">
      <div className="mx-auto max-w-6xl p-6">
        <h2 className="mb-4 text-2xl font-bold">
          Restaurants in Islamabad
        </h2>
        {/* Required height */}
        <MapContainer
          center={ISLAMABAD_CENTER}
          zoom={13}
          scrollWheelZoom={true}
          className="h-[500px] w-full rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup clusterOptions={clusterOptions}>
            {restaurants.map((restaurant, index) => (
              <Marker key={index} position={restaurant.position}>
                <Popup>
                  <RestaurantCard restaurant={restaurant} />
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default RestaurantMapIslamabad;
