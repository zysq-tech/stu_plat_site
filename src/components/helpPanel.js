import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  panel: {
    margin: "1em 1em",
  },
  summary: {
    flexFlow: "row",
  },
  summaryContent: {
    flexFlow: "column",
  },
  detials: {
    flexDirection: "column",
    backgroundColor: "#f1eff0",
    margin: "0 0.5em 1em 0.5em",
    borderRadius: "10px",
  },
}))

const HelpPanel = ({ summary, content }) => {
  const classes = useStyles()
  return (
    <div className={classes.panel}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.summaryContent}>{summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detials}>
          <Typography>{content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default HelpPanel
