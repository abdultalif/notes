const translationLogin = {
  en: {
    title: "Login",
    email: "Email",
    password: "Password",
    login: "Login",
    register: "Don't have an account?",
    registerLink: "Register here",
    success: "Login successful!",
  },
  id: {
    title: "Masuk",
    email: "Email",
    password: "Kata Sandi",
    login: "Masuk",
    register: "Belum punya akun?",
    registerLink: "Daftar disini",
    success: "Masuk berhasil!",
  },
};

const translationRegister = {
  en: {
    title: "Register",
    name: "Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm password",
    register: "Register",
    login: "Already have an account?",
    loginLink: "Login here",
    success: "Registration successful! You can now log in",
    passwordNotMatch: "Password and confirm password do not match",
  },
  id: {
    title: "Daftar",
    name: "Nama",
    email: "Email",
    password: "Kata sandi",
    confirmPassword: "Konfirmasi kata sandi",
    register: "Daftar",
    login: "Sudah punya akun?",
    loginLink: "Masuk disini",
    success: "Pendaftaran berhasil! Sekarang kamu bisa masuk",
    passwordNotMatch: "Kata sandi dan konfirmasi kata sandi tidak cocok",
  },
};

const translationNavbar = {
  en: {
    title: "MyNotes",
    notesList: "Notes List",
    addNote: "Add Note",
    archive: "Archive List",
    logout: "You have logged out successfully!",
  },
  id: {
    title: "Catatanku",
    notesList: "Daftar Catatan",
    addNote: "Tambah Catatan",
    archive: "Daftar Arsip",
    logout: "Anda telah berhasil keluar!",
  },
};

const translationHome = {
  en: {
    title: "Notes",
    empty: "Empty note",
    placeholder: "Search notes",
  },
  id: {
    title: "Catatan",
    empty: "Tidak ada catatan",
    placeholder: "Cari catatan",
  },
};

const translationArchive = {
  en: {
    title: "Archived",
    empty: "Empty archive",
    placeholder: "Search notes",
  },
  id: {
    title: "Arsip",
    empty: "Tidak ada arsip",
    placeholder: "Cari catatan",
  },
};

const translationNote = {
  en: {
    delete: "Delete",
    archived: "Archived",
    unarchived: "Unarchived",
    archivedSuccess: "Note archived successfully!",
    unarchivedSuccess: "Note unarchived successfully!",
    deletedSuccess: "Note deleted successfully!",
  },
  id: {
    delete: "Hapus",
    archived: "Arsip",
    unarchived: "Tidak diarsipkan",
    archivedSuccess: "Catatan berhasil diarsipkan!",
    unarchivedSuccess: "Catatan berhasil dihapus dari arsip!",
    deletedSuccess: "Catatan berhasil dihapus!",
  },
};

const translationCreateNote = {
  en: {
    titlePage: "New note",
    title: "title",
    body: "Body",
    saveNote: "Save note",
    success: "Note saved successfully!",
  },
  id: {
    titlePage: "Catatan baru",
    title: "Judul",
    body: "Bodi",
    saveNote: "Simpan Catatan",
    success: "Catatan berhasil disimpan!",
  },
};

const translationDetail = {
  en: {
    title: "Note Details",
    empty: "Empty note",
  },
  id: {
    title: "Detail Catatan",
    empty: "Tidak ada catatan",
  },
};

const translationNotFound = {
  en: {
    title: "Page not found",
  },
  id: {
    title: "Halaman tidak ditemukan",
  },
};

const translationProtectedRoute = {
  en: {
    message: "You must be logged in to access this page",
  },
  id: {
    message: "Anda harus masuk untuk mengakses halaman ini",
  },
};

const translationRedirectIfAuthenticated = {
  en: {
    message: "You are already logged in",
  },
  id: {
    message: "Anda sudah masuk",
  },
};

export {
  translationLogin,
  translationRegister,
  translationHome,
  translationNote,
  translationNavbar,
  translationArchive,
  translationCreateNote,
  translationDetail,
  translationNotFound,
  translationProtectedRoute,
  translationRedirectIfAuthenticated,
};
