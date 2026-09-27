import { motion } from "motion/react";
import profile from "../../assets/img/migang-pics.webp";

// Celda 1 — foto de perfil.
export const ProfilePhoto = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass flex min-h-0 justify-center overflow-hidden p-2 font-roboto
                order-2
                md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-2
                lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1"
  >
    <img src={profile} alt="profile-migang" className="h-full w-full object-contain" />
  </motion.div>
);

export default ProfilePhoto;
