import React, { useState, useEffect } from "react";
import {
  Modal,
  IconButton,
  Box,
  Typography,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const CardExperience = ({ image, position, place, time, description }) => {
  const images = Array.isArray(image) ? image : [image];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    let timer;

    if (!open && images.length > 1) {
      timer = setInterval(() => {
        setActiveIndex((prev) => {
          const next = prev + 1;
          return next >= images.length ? 0 : next;
        });
      }, 2000);
    } else {
      setActiveIndex(0);
    }

    return () => clearInterval(timer);
  }, [open, images.length]);


  const handleOpen = () => {
    setActiveIndex(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Card Container */}
      <Box className="rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all p-4 overflow-hidden shadow-md">
        {image && (
          // Clickable Image Container with Hover
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                "& .overlay": {
                  opacity: 1,
                },
                "& .hover-content": {
                  transform: "translate(-50%, -50%)",
                  opacity: 1,
                },
                "& .experience-image": {
                  filter: "contrast(1.05) brightness(0.2) saturate(1.1)",
                },
              },
            }}
          >
          {/* Image */}
          <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 2 }}>
          {/* Swipable Image Carousel */}
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${place} ${idx}`}
                style={{
                  width: `${100 / images.length}%`,
                  aspectRatio: "7 / 5",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                  transition: "filter 0.3s ease",
                }}
                onClick={handleOpen}
              />
            ))}
          </Box>

          {/* Dot Pagination */}
          {images.length > 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1,
                gap: 1,
                position: "absolute",
                bottom: 8,
                left: 0,
                right: 0,
              }}
            >
              {images.map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: idx === activeIndex ? "white" : "grey",
                    opacity: idx === activeIndex ? 1 : 0.5,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </Box>
          )}
          </Box>

          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              transition: "all 0.3s ease",
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={handleOpen}
          >
            <Box
              className="hover-content"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                opacity: 0,
                transition: "all 0.4s ease",
                textAlign: "center",
                width: "100%",
                color: "white",
              }}
            >
              <FullscreenIcon
                sx={{
                  fontSize: 40,
                  mb: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                View Experience
              </Typography>
            </Box>
          </Box>
        </Box>
        )}

        {/* Text Content */}
        <Box className="mt-3">
          <Typography variant="h6" className="text-white text-lg font-semibold">
            {place}
          </Typography>
          <Typography className="text-sm text-slate-400">
            {position} • {time}
          </Typography>
          <ul className="mt-2 text-slate-300 text-sm list-disc list-inside whitespace-pre-wrap space-y-1">
            {description
              .split("\n")
              .map((line, idx) => <li key={idx}>{line.replace(/^•\s*/, "")}</li>)}
          </ul>
        </Box>
      </Box>


      {/* Modal */}
      {image && (
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(5px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Full Image with left/right arrow */}
          <Box 
          sx={{ position: "relative" }}>
            {/* Left arrow */}
            {images.length > 1 && (
              <IconButton
                onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                sx={{
                  position: {
                    xs: "static", // mobile
                    sm: "absolute", // desktop
                  },
                  display: { xs: "none", sm: "flex" },
                  left: { sm: -60 },
                  top: { sm: "50%" },
                  transform: {
                    xs: "none",
                    sm: "translateY(-50%)",
                  },
                  color: "white",
                  zIndex: 2,
                  mx: { xs: 1 },
                  "&:hover": {
                    transform: {
                      xs: "scale(1.1)",
                      sm: "translateY(-50%) scale(1.1)",
                    },
                  },
                }}
              >
                {"←"}
              </IconButton>

            )}

            {/* Image */}
            <img
              src={images[activeIndex]}
              alt={`${place} ${activeIndex}`}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "90vh",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
            {images.length > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, gap: 1 }}>
                {images.map((_, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: idx === activeIndex ? 'white' : 'grey',
                      opacity: idx === activeIndex ? 1 : 0.5,
                      transition: 'all 0.3s',
                    }}
                  />
                ))}
              </Box>
            )}

            {/* Arrows for mobile - centered below image */}
            {images.length > 1 && (
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                  mt: 2,
                  gap: 2,
                }}
              >
                <IconButton
                  onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
                  }
                  sx={{
                    color: "white",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {"←"}
                </IconButton>
                <IconButton
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % images.length)
                  }
                  sx={{
                    color: "white",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.2)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {"→"}
                </IconButton>
              </Box>
            )}



            {/* Right arrow */}
            {images.length > 1 && (
              <IconButton
                onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                sx={{
                  position: {
                    xs: "static",
                    sm: "absolute",
                  },
                  display: { xs: "none", sm: "flex" },
                  right: { sm: -60 },
                  top: { sm: "50%" },
                  transform: {
                    xs: "none",
                    sm: "translateY(-50%)",
                  },
                  color: "white",
                  zIndex: 2,
                  mx: { xs: 1 },
                  "&:hover": {
                    transform: {
                      xs: "scale(1.1)",
                      sm: "translateY(-50%) scale(1.1)",
                    },
                  },
                }}
              >
                {"→"}
              </IconButton>

            )}
          </Box>

        </Box>
      </Modal>
      )}
    </>
  );
};

export default CardExperience;
