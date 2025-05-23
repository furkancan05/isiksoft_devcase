import React from "react";

export default function ProductsSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-full h-20 bg-secondary/50 rounded-md" />
      ))}
    </div>
  );
}
