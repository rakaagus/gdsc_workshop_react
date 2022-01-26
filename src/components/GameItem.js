import React from 'react';
import { Link } from 'react-router-dom';
import { RiWindowsFill } from 'react-icons/ri';
import Badge from './Badge';
import LazyLoad from 'react-lazyload';

const GameItem = ({ data }) => {
  const { title, short_description, platform, thumbnail, genre, id } = data;
  return (
    <Link to={`/details/${id}`}>
      <div className="w-full rounded-md overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
        <LazyLoad>
          <img src={thumbnail} alt="thumbnail" className="w-full" />
        </LazyLoad>
        <div className="p-4 flex flex-col w-full gap-3">
          <div className="flex justify-between items-center w-full ">
            <h1 className="font-semibold text-md">{title}</h1>
            <Badge type="primary">Free</Badge>
          </div>
          <p className="text-slate-500 tracking-tight leading-tight ">
            {short_description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <Badge type="secondary">{genre}</Badge>
            <RiWindowsFill className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameItem;