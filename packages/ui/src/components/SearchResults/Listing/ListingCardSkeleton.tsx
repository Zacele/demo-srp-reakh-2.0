'use client'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

export default function ListingCardSkeleton() {
  return (
    <Card
      sx={{
        maxWidth: {
          xs: 440,
          md: 1000
        },
        height: {
          md: 250
        },
        backgroundColor: '#fff',
        margin: 'auto',
        flexGrow: 1,
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: '15px',
        overflow: 'hidden',
        mb: 3
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Grid
            item
            xs={12}
            sx={{
              height: 185,
              mb: 0.5
            }}
          >
            <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
          </Grid>
          <Grid container spacing={0.5}>
            {Array.from(new Array(3)).map((_, idx) => {
              return (
                <Grid key={idx} item xs={4}>
                  <Skeleton variant="rectangular" width={'100%'} height={70} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={8} sx={{ mt: 3, pb: 3, pr: 7 }}>
          <Skeleton width="60%" />
          <Skeleton width="80%" />
          <Skeleton width="50%" height={'25%'} />
          <Skeleton width="80%" />
          <Skeleton width="30%" height={'20%'} />
          <Skeleton width="20%" />
          <Skeleton width="20%" />
        </Grid>
      </Grid>
    </Card>
  )
}
