import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="group relative w-full">
      {/* Card Container */}
      <Box className="rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all p-4 overflow-hidden shadow-md">
        {/* Clickable Image Container with Hover */}
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
          <Box sx={{ position: "relative" }}>
            <img
              className="experience-image"
              src={image}
              alt="Experience"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                transition: "filter 0.3s ease",
              }}
              onClick={handleOpen}
            />
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

        {/* Text Content */}
        <Box className="mt-3">
          <Typography variant="h6" className="text-white text-lg font-semibold">
            {position}
          </Typography>
          <Typography className="text-sm text-slate-400">
            {place} • {time}
          </Typography>
          <ul className="mt-2 text-slate-300 text-sm list-disc list-inside whitespace-pre-wrap space-y-1">
            {description
              .split("\n")
              .map((line, idx) => <li key={idx}>{line.replace(/^•\s*/, "")}</li>)}
          </ul>
        </Box>
      </Box>

      {/* Modal */}
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

          {/* Full Image */}
          <img
            src={image}
            alt="Zoomed"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default CardExperience;
