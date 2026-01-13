export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
}) {
  const gradientColors = [...colors, ...colors];
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >

      <div
        className="inline-block relative z-2 text-transparent font-bold bg-cover leading-[1.2] animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '200% 100%'
        }}
      >
        {children}
      </div>
    </div>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };
