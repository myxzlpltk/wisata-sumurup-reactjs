import { Masonry } from "masonic";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import { BottomSheet } from "react-spring-bottom-sheet";
import "swiper/css/navigation";
import SocialMediaCard from "../components/social-media-card";
import community from "../data/community";

const CommunitySection = (props) => {
  const { id } = props;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const openModal = (data) => {
    setOpen(true);
    setData(data);
  };

  const closeModal = () => {
    setOpen(false);
    setData(null);
  };

  return (
    <Fragment>
      <div
        className="container py-8 md:py-12 xl:py-16 flex flex-col lg:flex-row gap-10"
        id={id}
      >
        <div className="flex-none text-center">
          <div className="lg:sticky lg:top-32">
            <img
              src="/svg/community.svg"
              alt="Komunitas kelompok sadar wisata Desa Sumurup"
              className="w-full max-w-sm mx-auto"
            />
            <h2 className="-mt-24 mx-auto text-6xl font-open-sans-condensed font-bold text-center mb-4">
              Sapa Komunitas Kami
            </h2>
            <p className="mx-auto max-w-sm text-md tracking-tight text-center text-gray-600 mb-2">
              Apakah kamu sudah pernah berwisata ke Desa Sumurup? Pasang foto
              kamu disini!
            </p>
            <div className="text-center">
              <a
                href="mailto:myxzlpltk@gmail.com?subject=Saya%20ingin%20memajang%20foto%20saya&body=Ketik%20link%20postingan%20sosial%20media%20kamu%20disini%0D%0A1.%20____%0D%0A2.%20____"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-white"
                data-rounded="rounded-md"
                data-primary="blue-600"
                data-primary-reset="{}"
              >
                Saya ingin memajang foto saya
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Masonry
            items={community}
            render={(props) => (
              <SocialMediaCard
                {...props}
                onClick={() => openModal(props.data)}
              />
            )}
            columnGutter={10}
            columnWidth={150}
            role="grid"
          />
        </div>
      </div>
      {open && data !== null && (
        <BottomSheet
          open={open}
          onDismiss={closeModal}
          defaultSnap={({ maxHeight }) => maxHeight * 0.8}
          snapPoints={({ maxHeight }) => [
            maxHeight * 0.8,
            maxHeight * 0.5,
            maxHeight * 0.65,
          ]}
        >
          <div className="flex justify-center mb-4 px-2">
            {data.type === "instagram" && (
              <InstagramEmbed url={data.url} width="100%" />
            )}
            {data.type === "tiktok" && (
              <TikTokEmbed url={data.url} width="100%" />
            )}
          </div>
        </BottomSheet>
      )}
    </Fragment>
  );
};

CommunitySection.propTypes = {
  id: PropTypes.string,
};

export default CommunitySection;
