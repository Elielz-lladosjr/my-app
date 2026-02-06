"use client";

export default function Logo({ link, imagen, alt }: any) {
  return (
    <a href={link} target="_blank" style={{ margin: '0 10px', display: 'inline-block' }}>
      <img 
        src={imagen} 
        alt={alt} 
        style={{ height: '50px', width: 'auto' }} 
      />
    </a>
  );
}