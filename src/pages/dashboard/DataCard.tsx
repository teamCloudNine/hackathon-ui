import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface DataCardProps {
  difference?: number;
  title: string;
  positive?: boolean;
  sx?: any;
  value: string;
  icon: ReactNode;
  color?: string;
}

export const DataCard = (props: DataCardProps) => {
  const {
    difference,
    title,
    positive = false,
    sx,
    value,
    icon,
    color = "success.main",
  } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: color,
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? "success" : "error"} fontSize="small">
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? "success.main" : "error.main"}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
