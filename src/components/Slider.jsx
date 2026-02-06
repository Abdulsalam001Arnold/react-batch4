

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Video from './Video'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        <div className="w-full h-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                className="w-full h-full"
            >
                <SwiperSlide className="w-full h-full">
                    <Video videoLink={"https://data.openasset.com/3f741c2e/021dbbaf3cbf13fc044f82416ffa7da9/F_250519_gensler_city_pulse_2025_hero_mp4/F_250519_gensler_city_pulse_2025_hero_videolarge.mp4"} title={"Welcome to our website"} description={"ijnoitrjijgoitrngioutiongiubnjtiurngniutrniuntbiuntuntnhj"}/>
                </SwiperSlide>

                <SwiperSlide className="w-full h-full">
                    <Video videoLink={"https://data.openasset.com/3f741c2e/971bf3c36b6f794a6d209af2b8a01d1a/F_251118_pittsburgh_airport_web_edit_new.mp4"} title={"Welcome to our website"} description={"ijnoitrjijgoitrngioutiongiubnjtiurngniutrniuntbiuntuntnhj"}/>
                </SwiperSlide>

                <SwiperSlide className="w-full h-full">
                    <Video videoLink={"https://data.openasset.com/3f741c2e/39e593b318acb731a47008efdb7d8b37/F_251125_burlingame_design_forecast_hero_mp4/F_251125_burlingame_design_forecast_hero_videolarge.mp4"} title={"Welcome to our website"} description={"ijnoitrjijgoitrngioutiongiubnjtiurngniutrniuntbiuntuntnhj"}/>
                </SwiperSlide>
                </Swiper>
        </div>
    );
}