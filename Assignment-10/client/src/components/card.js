import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CustomCard({ title, content }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
