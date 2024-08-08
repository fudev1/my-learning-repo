class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_success(message):
    print(Colors.OKGREEN + message + Colors.ENDC)

def print_error(message):
    print(Colors.FAIL + message + Colors.ENDC)

def print_info(message):
    print(Colors.OKBLUE + message + Colors.ENDC)

def print_warning(message):
    print(Colors.WARNING + message + Colors.ENDC)
