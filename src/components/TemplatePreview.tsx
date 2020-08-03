import React, { useState } from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import cx from "classnames";
import { Options } from "../interfaces";
import WindowHeader from "./WindowHeader";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(2),
    borderRadius: 0,
  },
  editor: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: 200,
    height: 80,
  },
  dark: {
    backgroundColor: "#54799D",
  },
  title: {
    width: "70%",
    height: spacing(2),
    marginBottom: spacing(1),
    borderRadius: spacing(2),
    opacity: 0.35,
  },
}));

interface Props {
  className?: string;
  options: Options;
  onClick: () => void;
}

const TemplatePreview = ({ className, onClick, options }: Props) => {
  const classes = useStyles();
  const { fontColor, lightMode, os } = options;

  return (
    <Button
      onClick={onClick}
      className={cx(classes.root)}
      style={{
        backgroundColor: options.backgroundColor,
      }}
      component={"div"}
    >
      <div>
        <div className={classes.title} style={{ backgroundColor: fontColor }} />
        <Paper
          className={cx(classes.editor, { [classes.dark]: !lightMode })}
          elevation={1}
        >
          <WindowHeader variant={os} />
        </Paper>
      </div>
    </Button>
  );
};

export default TemplatePreview;
