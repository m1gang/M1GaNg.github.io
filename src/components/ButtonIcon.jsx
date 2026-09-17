const GradientDefs = ({ id, colors }) => (
  <defs>
    <linearGradient
      id={id}
      x1="0"
      y1="0"
      x2="24"
      y2="24"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor={colors[0]} />
      <stop offset="0.575" stopColor={colors[1]} />
      <stop offset="1" stopColor={colors[2]} />
    </linearGradient>
  </defs>
);

const baseProps = (size) => ({
  width: size,
  height: size,
});

export const ProjectsButtonIcon = ({
  size = 18,
  className = "",
  style = {},
}) => (
  <svg
    {...baseProps(size)}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <GradientDefs id="btn-projects-grad" colors={["#7A69F9", "#F26378", "#F5833F"]} />
    <path
      fill="url(#btn-projects-grad)"
      d="M1 4.5A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8 3.792l-2.06 2.06A.5.5 0 0 1 5.585 6H1zM1 7v4.5A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 4H9.207l-2.56 2.56A1.5 1.5 0 0 1 5.585 7z"
    />
  </svg>
);

export const ContactButtonIcon = ({
  size = 18,
  className = "",
  style = {},
}) => (
  <svg
    {...baseProps(size)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <GradientDefs id="btn-contact-grad" colors={["#3BC4F2", "#7A69F9", "#B45CF2"]} />
    <path
      fill="url(#btn-contact-grad)"
      d="M14 21.372V14H4.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22c1.51 0 2.847-.209 4-.629M10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M21.255 10c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16.75A1.75 1.75 0 0 1 15 21.25v-9.5c0-.966.784-1.75 1.75-1.75zm-2.002 8.997h-.5l-.102.007a.75.75 0 0 0 .102 1.493h.5l.101-.007a.75.75 0 0 0-.101-1.493"
    />
  </svg>
);

export const CvButtonIcon = ({ size = 18, className = "", style = {} }) => (
  <svg
    {...baseProps(size)}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <GradientDefs id="btn-cv-grad" colors={["#34D399", "#A3E635", "#22D3EE"]} />
    <path
      fill="url(#btn-cv-grad)"
      d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM6 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5zM6.75 15h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5M6 19.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 6 19.5m11.25-5h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20.25 21h-3a1.75 1.75 0 0 1-1.75-1.75v-3c0-.966.784-1.75 1.75-1.75M17 16.25a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25z"
    />
  </svg>
);
