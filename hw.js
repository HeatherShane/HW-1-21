var hotmail = {
  folders: [
    {name: "inbox",
    email: [
      {from: "Tim",
      date: 1/1/16,
      subject: "petunia's birthday",
      message: "Don't forget!",
    }
]},

  {name: "draft"
  email: [
    {from: "Heather",
     date: 6/1/15,
     subject: "oh, really?",
     message: "did you change your formula or manufacturer for larabars?",

   }
 ]},


 {name : "junk"
  email: [
  {from: ["HRC", "R4H"]
   date: 1/11/16,
   subject: "Yikes!",
   message: "We are getting desperate"
  }
]}

]};

// Get a list of inbox names

console.log(hotmail.folders.name)

// Get a list of emails
console.log(hotmail.folders.email)

// Get the text of the second email in the visible list
console.log(hotmail.folders[1].email.message)

// Mark an email as sent
hotmail.folder.inbox.email.sent = true

// Add a draft email to the drafts mailbox
hotmail.folder.draft.email.push(
  {from: "Ghost Face",
  date: 1/11/16,
  subject: "ARF!",
  message: "ARFARFARFARFARFARFARFARFARFARFARFARFARFARF"
}

)
