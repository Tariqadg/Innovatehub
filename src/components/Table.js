import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import tableBody from "../list.json"
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Dropdown from "./Dropdown";


export default function BasicTable() {
  return (
    <>
      <Dropdown />
      <Grid
        container
        spacing={2}
        direction="row"
        sx={{ height: "60dvh", overflow: "scroll" }}
      >
        <Grid xs={2}>
          <Typography>Brand</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>Description</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>Members</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>Categories</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>Tags</Typography>
        </Grid>
        <Grid xs={2}>
          <Typography>Next Meeting</Typography>
        </Grid>

        {tableBody.map((row, index) => (
          <Grid spacing={2} container key={index}>
            <Grid xs={2}>
              <Stack direction="row">
                <Checkbox defaultChecked />
                <Typography>{row.Brand} </Typography>
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Typography
                sx={{
                  width: "10em",
                  height: "2em",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {row.Description}
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Typography>
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Typography>
                <Stack
                  direction="row"
                  gap={1}
                  sx={{ width: "10em", overflowX: "scroll", p: "0.5em" }}
                >
                  {row.Categories.map((category, index) => (
                    <Chip
                      key={index}
                      color={index % 2 == 0 ? "primary" : "success"}
                      label={category}
                    />
                  ))}
                </Stack>
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Stack
                direction="row"
                gap={2}
                sx={{ width: "10em", overflowX: "scroll", p: "0.5em" }}
              >
                {row.Tags.map((tag, index) => (
                  <Chip key={index} label={tag} />
                ))}
              </Stack>
            </Grid>
            <Grid xs={2}>
              <Typography>
                {
                  <Chip
                    key={index}
                    color={"success"}
                    label={row["Next Meeting"]}
                  />
                }
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
