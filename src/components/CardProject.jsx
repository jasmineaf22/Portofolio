import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import {
  Modal,
  IconButton,
  Box,
  Backdrop,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

// Tech Stack badge
const TechBadge = ({ tech }) => (
  <div className="px-2 py-1 block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
);

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, TechStack = [] }) => {
  const [open, setOpen] = useState(false);

  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="group relative w-full">
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        {/* Content Wrapper */}
        <div className="relative p-5 z-10">
          {/* Image */}
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                '& .overlay': { opacity: 1 },
                '& .hover-content': {
                  transform: 'translate(-50%, -50%)',
                  opacity: 1,
                },
                '& .project-image': {
                  filter: 'contrast(1.05) brightness(1) saturate(1.1)',
                },
              },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <img
                className="project-image"
                src={Img}
                alt={Title}
                style={{
                  width: "100%",
                  aspectRatio: "7 / 5",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
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
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                zIndex: 2,
              }}
              onClick={handleOpen}
            >
              <Box
                className="hover-content"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -60%)',
                  opacity: 0,
                  transition: 'all 0.4s ease',
                  textAlign: 'center',
                  width: '100%',
                  color: 'white',
                }}
              >
                <FullscreenIcon sx={{ fontSize: 40, mb: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
                <Typography variant="h6" sx={{ fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  View Project
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Modal Zoom */}
          <Modal
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 300,
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(5px)',
              },
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                outline: 'none',
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.6)',
                  zIndex: 1,
                  padding: 1,
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.8)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: 24 }} />
              </IconButton>

              <img
                src={Img}
                alt="Zoomed Project"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  margin: '0 auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Modal>

          {/* Title & Description */}
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>

            {/* Tech Stack */}
            {TechStack.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-start">
                {TechStack.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300/80 text-sm leading-relaxed whitespace-pre-wrap">
              {Description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Link</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Link Not Available</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">Details Not Available</span>
              )}
            </div>
          </div>

          {/* Outer border hover effect */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
