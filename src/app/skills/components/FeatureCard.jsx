const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-slate-700 p-1 rounded-md">
      <p className="font-bold text-lg text-graytext">{feature.title}</p>
      <p className="text-md">{feature.desc}</p>
    </div>
  );
};

export default FeatureCard;
