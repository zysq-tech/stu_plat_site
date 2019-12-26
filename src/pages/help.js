import React from "react"
import SEO from "../components/seo"
import HelpPanel from "../components/helpPanel"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import Dialog from "@material-ui/core/Dialog"
import { CopyToClipboard } from "react-copy-to-clipboard"
import HelpConfig from "../config/helpConfig"

const useStyles = makeStyles(theme => ({
  title: {
    margin: "1em 1em",
  },
  btnContainer: {
    textAlign: "center",
    display: "block",
  },
  textBtn: {
    color: "#13b9c7",
  },
  copyBtn: {
    margin: "1em 0",
    backgroundColor: "#13b9c7",
    color: "#fff",
    borderRadius: "10px",
  },
}))

const qq = "12345678"

const HelpPage = () => {
  const classes = useStyles()

  const [showDialog, setShowDialog] = React.useState(false)

  const handleClickOpen = () => {
    setShowDialog(true)
  }

  const handleClose = () => {
    setShowDialog(false)
  }

  return (
    <div>
      <SEO title="Help" />
      <div className={classes.title}>
        <b>常见问题</b>
      </div>
      {HelpConfig.map((pair, i) => (
        <HelpPanel
          key={i}
          summary={pair.summary}
          content={pair.content}
        ></HelpPanel>
      ))}
      <div className={classes.btnContainer}>
        <Button className={classes.textBtn} onClick={handleClickOpen}>
          在线客服
        </Button>
      </div>
      <Dialog onClose={handleClose} open={showDialog}>
        <DialogContent>
          {`欢迎您的咨询，大学生应用宝竭诚为您服务。添加QQ群：${qq}在线为您答疑解惑`}
        </DialogContent>
        <div className={classes.btnContainer}>
          <CopyToClipboard text={qq} onCopy={handleClose}>
            <Button variant="contained" className={classes.copyBtn}>
              复制
            </Button>
          </CopyToClipboard>
        </div>
      </Dialog>
    </div>
  )
}

export default HelpPage
