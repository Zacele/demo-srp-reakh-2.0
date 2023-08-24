'use client'

import * as React from 'react'
import { DialogContent, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Link from 'next/link'

import BigOutlinedTelephone from '../../icons/BigOutlinedTelephone'
import MapIcon from '../../icons/MapIcon'
import FacebookIcon from '../../icons/socials/Facebook'
import InstagramIcon from '../../icons/socials/Instagram'
import LinkedInIcon from '../../icons/socials/LinkedIn'
import TwitterIcon from '../../icons/socials/Twitter'
import WechatIcon from '../../icons/socials/WeChat'
import YoutubeIcon from '../../icons/socials/Youtube'
import { IEssential } from '../../types/essentialType'

const BottomFooter: React.FC<{ essentialData: IEssential }> = ({ essentialData }) => {
  const [openWeChatDialog, setOpenWeChatDialog] = React.useState(false)

  const handleWeChatOpen = () => setOpenWeChatDialog(true)
  const handleWeChatClose = () => setOpenWeChatDialog(false)

  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: '#203C3E', mx: 'auto' }}>
        <Box
          sx={{
            maxWidth: '1200px',
            px: 6,
            display: 'flex',
            py: 1.5,
            justifyContent: 'space-between'
          }}
        >
          <Link aria-label="Link to home" href={'/'} passHref>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_ROOT}/static/img/logo-reverse.svg`}
              alt="logo"
              width={200}
              height={80}
              style={{ paddingRight: '20px' }}
            />
          </Link>
          <Box>
            <Grid container spacing={2}>
              {essentialData.footer.links
                .filter(({ name }) => name !== 'Dashboard' && name !== 'Login')
                .map((link) => (
                  <Grid item xs="auto" key={link.id} sx={{ color: '#fff', fontWeight: 700 }}>
                    <Link href={link.path}>{link.name}</Link>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#fff', mx: 'auto', mb: 4 }}>
        <Box
          sx={{
            maxWidth: '1200px',
            width: '50%',
            px: 6,
            display: 'flex',
            py: 1.5,
            pt: 3,
            justifyContent: 'space-between'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <MapIcon />
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#203C3E',
                  fontWeight: 700,
                  lineHeight: '17px',
                  width: '200px'
                }}
              >
                {essentialData.footer.contact.address}
              </Typography>
            </Grid>
            <Grid item style={{ paddingLeft: '32px' }}>
              <BigOutlinedTelephone />
            </Grid>
            <Grid item xs="auto">
              <Typography
                sx={{ fontSize: '16px', color: '#203C3E', fontWeight: 700, lineHeight: '17px' }}
              >
                {essentialData.footer.contact.phone_number}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            maxWidth: '1200px',
            px: 6,
            display: 'flex',
            py: 1.5,
            justifyContent: 'space-between',
            '& hr': {
              mx: 0.5,
              backgroundColor: '#203C3E'
            }
            // border: '1px solid #000'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Link target="_blank" href={essentialData.social_profiles.facebook.url}>
                <FacebookIcon />
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Link target="_blank" href={essentialData.social_profiles.youtube.url}>
                <YoutubeIcon />
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Link target="_blank" href={essentialData.social_profiles.linkedin.url}>
                <LinkedInIcon />
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Link target="_blank" href={essentialData.social_profiles.twitter.url}>
                <TwitterIcon />
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Link target="_blank" href={essentialData.social_profiles.instagram.url}>
                <InstagramIcon />
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Box sx={{ cursor: 'pointer' }} onClick={handleWeChatOpen}>
                <WechatIcon />
              </Box>
            </Grid>

            <Grid item xs="auto">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  color: '#203C3E',
                  lineHeight: '21px',
                  fontWeight: 700,
                  marginLeft: '32px'
                }}
              >
                {essentialData.footer.partner_sites.map((partnerSite, idx) => (
                  <>
                    <Link key={partnerSite.name} target="_blank" href={partnerSite.path}>
                      {partnerSite.name}
                    </Link>
                    {idx === essentialData.footer.partner_sites.length - 1 ? null : (
                      <span style={{ margin: '0 4px' }}> | </span>
                    )}
                  </>
                ))}
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: 10 }}>
                {essentialData.app.data.map((app, idx) => (
                  <Link key={app.name} href={app.url} target="_blank">
                    <Image src={app.image} alt={app.image_alt} height={45} width={120} />
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Dialog open={openWeChatDialog} onClose={handleWeChatClose}>
        <DialogContent sx={{ width: '400px', height: '400px' }}>
          <Image
            alt="we-chat-qr-code"
            fill
            src={process.env.NEXT_PUBLIC_API_ROOT + essentialData.social_profiles.weechat.image.url}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default BottomFooter
